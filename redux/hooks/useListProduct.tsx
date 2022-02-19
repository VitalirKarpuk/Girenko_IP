import { useAppSelector } from '../store';
import { selectLinesProduct } from '../selectors/menu';

export default function useListMenu() {
  const listMenu = useAppSelector(selectLinesProduct);

  return {
    listMenu,
  };
}
