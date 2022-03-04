import useCartState from "../../lib/hooks/useCartState";
import FormattedPrice from "../../lib/helpers/getFormattedPrice";
import classes from "./CartDisplay.module.scss";
import classNames from "classnames";

type Props = {
	isCompact?: boolean;
};

const CartDisplay = (props: Props) => {
	const { isCompact } = props;
	const cartState = useCartState();

	const tableClasses = classNames(`${classes["cart-table"]}`, {
		[classes["compact-view"]]: isCompact,
		[`padding-x`]: !isCompact,
		[`margin-x`]: isCompact,
		[`is-compact-table`]: isCompact,
	});

	return (
		<div className={tableClasses}>
			<div
				className={`${classes["cart-table__header"]} cell d-flex p-b-sm m-b-md`}
			>
				<div className="cell mob-8">
					<strong>Item</strong>
				</div>
				<div className="cell mob-2 text-align-center">
					<strong>Qty</strong>
				</div>
				<div className="cell mob-2 text-align-right">
					<strong>Value</strong>
				</div>
			</div>

			<div className={`cart-table__body cell`}>
				{cartState?.items.map((item) => {
					return (
						<div
							className={`${classes["cart-table--row"]} cell d-flex`}
							key={item.id}
						>
							<div className="mob-8">{item.name}</div>
							<div className="mob-2 text-align-center">
								{item.quantity}
							</div>
							<div className="mob-2 text-align-right">
								<FormattedPrice value={item.value} />
							</div>
						</div>
					);
				})}
			</div>

			{!isCompact && (
				<div
					className={`${classes["cart-table__footer"]} cell d-flex p-t-sm m-t-md`}
				>
					<div className="cell mob-8">Totals:</div>
					<div className="cell mob-2 text-align-center">
						{cartState?.totalQuantity}
					</div>
					<div className="cell mob-2 text-align-right">
						<FormattedPrice value={cartState?.totalValue || 0} />
					</div>
				</div>
			)}
		</div>
	);
};

export default CartDisplay;
