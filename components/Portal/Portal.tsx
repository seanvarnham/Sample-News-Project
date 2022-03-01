import { createPortal } from 'react-dom';
import usePortal from './usePortal';
import useDestroyPortal from './useDestroyPortal';

/**
 * @example
 * <Portal>
 *   <p>Portal content</p>
 * </Portal>
 */

interface IPortalProps {
  id: string;
  children: React.ReactNode;
  keepRoot?: boolean;
}

const Portal = ({ id, children, keepRoot }: IPortalProps) => {
  const domNode = usePortal(id);
  useDestroyPortal(id, keepRoot);
  if (domNode) {
    return createPortal(children, domNode);
  }
  return null;
};

export default Portal;
