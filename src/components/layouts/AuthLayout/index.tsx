import { colors } from '@assets/styles/colors';
import { Container } from '@components/ui/Container';
import { Logo } from '@components/ui/Logo';
import { useWatchKeyboard } from '@hooks';
import { cn } from '@utils';
import { isAndroid } from '@utils/isAndroid';
import type { PropsWithChildren } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { AuthHeader } from './AuthHeader';

export function AuthLayout({ children }: PropsWithChildren) {
  const { isKeyboardVisible } = useWatchKeyboard();

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={isAndroid ? 'height' : 'padding'}
        className={cn(
          'flex-1 items-center justify-center px-6',
          isKeyboardVisible ? 'gap-8' : 'gap-16'
        )}
      >
        <Logo color={colors.gray[5]} height={24} width={104} />
        <View className="w-full">{children}</View>
      </KeyboardAvoidingView>
    </Container>
  );
}

AuthLayout.Header = AuthHeader;
