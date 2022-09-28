/**
 * This should be passed an array of objects.
 *
 * By default, the fn will search for items within the top-level objects.
 * You can search arrays of objects within the top-level objects by passing
 * the third param 'arrayToSearch'
 *
 * @param objectArray array
 * @param valToFind string ("sample" or "sample.string.for.objects")
 * @param arrayToSearch string ("sample" or "sample.string.for.objects")
 * @returns string[] | string
 */
const arrayToString = (
	objectArray: any,
	valToFind: any,
	arrayToSearch: any = null
) => {
	if (!objectArray || !valToFind)
		return "ERROR: objectArray or valToFind is undefined (arrayToString)";

	let mappedValues;

	if (arrayToSearch) {
		mappedValues = objectArray
			.reduce((acc: any, cur: any) => acc.concat(cur[arrayToSearch]), [])
			.map((item: any) => item[valToFind]?.toString() || "");
	} else {
		mappedValues = objectArray
			.reduce((acc: any, cur: any) => acc.concat(cur), [])
			.map((item: any) => item[valToFind]?.toString() || "");
	}

	// If we're looking inside an object then we need to process that object for use
	const isChained = valToFind.includes(".");
	if (isChained) {
		// First, let's set an empty array for chained data
		let chainedArray: any = [];
		// Split the params
		const params = valToFind.split(".");

		// For each objectArray (which is returned as an array of objects)
		objectArray.forEach((obj: any) => {
			// Loop through the params
			params.forEach((key: string) => {
				// get the valToFind of the key
				obj = obj[key];

				// If we're still looping an object, skip doing anything with it
				if (typeof obj != "object") {
					// If we have a valToFind, add that to our array
					chainedArray.push(obj);
				}
			});
		});

		// As we already have a mappedValues var, we'll need to overwrite it with the data we've just processed
		mappedValues = chainedArray.map((valToFind: any) =>
			valToFind.toString()
		);
	}

	switch (typeof mappedValues) {
		case "undefined":
			return "";

		case "object":
			if (mappedValues.length > 1) {
				return mappedValues;
			} else {
				return mappedValues[0].toString();
			}

		case "string":
			return mappedValues;

		case "number" || "bigint":
			return mappedValues.toString();

		default:
			return mappedValues.toString();
	}
};
export default arrayToString;
