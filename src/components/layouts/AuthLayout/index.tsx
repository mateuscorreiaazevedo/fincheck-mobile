import { colors } from '@assets/styles/colors';
import { Container } from '@components/ui/Container';
import { Logo } from '@components/ui/Logo';
import { NUMBER_CONSTANTS as c } from '@constants';
import { useWatchKeyboard } from '@hooks';
import { isAndroid } from '@utils/isAndroid';
import type { PropsWithChildren } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthHeader } from './AuthHeader';

export function AuthLayout({ children }: PropsWithChildren) {
  const { top } = useSafeAreaInsets();
  const { isKeyboardVisible } = useWatchKeyboard();

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={isAndroid ? 'height' : 'padding'}
        className="flex-1 items-center justify-center px-6"
        style={{
          gap: isKeyboardVisible ? c.GAP_XL - top : c.GAP_XL,
        }}
      >
        <Logo color={colors.gray[5]} height={24} width={104} />
        <View className="w-full">{children}</View>
      </KeyboardAvoidingView>
    </Container>
  );
}

AuthLayout.Header = AuthHeader;
