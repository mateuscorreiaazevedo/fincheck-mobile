import { type ParamListBase, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export function useNavigate() {
  return useNavigation<NativeStackNavigationProp<ParamListBase>>();
}
