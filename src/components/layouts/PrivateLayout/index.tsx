import { colors } from '@assets/styles/colors';
import { ACTIVE_OPACITY, Logo, Text } from '@components/ui';
import { useAuthentication } from '@hooks/auth/useAuthentication';
import { StringBuilder } from '@utils';
import type { PropsWithChildren } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function PrivateLayout({ children }: PropsWithChildren) {
  const { top, bottom } = useSafeAreaInsets();
  const { unAuthenticate, authenticatedUser } = useAuthentication();

  const firstNameInitialLetter = StringBuilder.parse(
    authenticatedUser?.firstName ?? ''
  )
    .firstChar(true)
    .build();
  const lastNameInitialLetter = StringBuilder.parse(
    authenticatedUser?.lastName ?? ''
  )
    .firstChar(true)
    .build();

  return (
    <View className="flex-1 bg-gray-0 px-4" style={{ paddingTop: top }}>
      <View className="mb-2 flex-row items-center justify-between py-5">
        <Logo color={colors.teal[9]} height={24} width={106} />
        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          className="size-12 items-center justify-center rounded-full border border-teal-1 bg-teal-0"
          onPress={unAuthenticate}
        >
          <Text className="text-sm text-teal-9">
            {firstNameInitialLetter}
            {lastNameInitialLetter}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ paddingBottom: bottom }}>{children}</ScrollView>
    </View>
  );
}
