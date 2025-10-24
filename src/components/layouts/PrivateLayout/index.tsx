import { colors } from '@assets/styles/colors';
import { ACTIVE_OPACITY, Logo, Text } from '@components/ui';
import type { PropsWithChildren } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function PrivateLayout({ children }: PropsWithChildren) {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-gray-0 px-4" style={{ paddingTop: top }}>
      <View className="mb-2 flex-row items-center justify-between py-5">
        <Logo color={colors.teal[9]} height={24} width={106} />
        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          className="size-12 items-center justify-center rounded-full bg-teal-0"
        >
          <Text className="text-sm text-teal-9">MA</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="bg-red-1" style={{ paddingBottom: bottom }}>
        {children}
      </ScrollView>
    </View>
  );
}
