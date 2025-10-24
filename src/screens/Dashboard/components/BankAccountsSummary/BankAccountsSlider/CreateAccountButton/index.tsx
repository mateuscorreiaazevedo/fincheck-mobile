import { colors } from '@assets/styles/colors';
import { ACTIVE_OPACITY, PlusIcon, Text } from '@components/ui';
import { TouchableOpacity, View } from 'react-native';

export function CreateAccountButton() {
  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      className="h-[204px] w-full items-center justify-center gap-4 rounded-2xl border-2 border-teal-6 border-dashed"
    >
      <View className="size-11 items-center justify-center rounded-full border-2 border-white border-dashed">
        <PlusIcon color={colors.white} height={24} width={24} />
      </View>
      <Text className="w-32 text-center font-500 text-white">
        Cadastre uma nova conta
      </Text>
    </TouchableOpacity>
  );
}
