import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useSafeAreaInsetsCustom = () => {
  const insets = useSafeAreaInsets();
  return insets;
};
