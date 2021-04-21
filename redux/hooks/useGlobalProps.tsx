import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function useGlobalProps(): any | null {
  const globalProps = useSelector<RootState, any | null>((state) => state.globalProps);

  return globalProps;
}
