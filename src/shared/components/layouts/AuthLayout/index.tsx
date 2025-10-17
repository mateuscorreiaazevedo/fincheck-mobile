import { Button } from '@shared/components/ui/Button';
import { Container } from '@shared/components/ui/Container';
import { Logo } from '@shared/components/ui/Logo';
import { Text } from '@shared/components/ui/Text';
import { isAndroid } from '@shared/utils/isAndroid';
import { colors } from '@src/assets/styles/colors';
import { type Href, useRouter } from 'expo-router';
import type { PropsWithChildren } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  link: {
    href: Href;
    label: string;
  };
}

export function AuthLayout({
  children,
  link,
  subtitle,
  title,
}: PropsWithChildren<AuthLayoutProps>) {
  const router = useRouter();

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={isAndroid ? 'height' : 'padding'}
        className="flex-1 items-center justify-center gap-16"
      >
        <Logo color={colors.gray[5]} height={24} width={104} />
        <View>
          <View className="mb-12">
            <Text className="text-center font-700 text-2xl text-gray-9 tracking-[-1px]">
              {title}
            </Text>
            <View className="flex-row gap-2">
              <Text className="text-gray-7 text-sm tracking-[-0.5px]">
                {subtitle}
              </Text>

              <Button
                activeOpacity={0.7}
                onPress={() => router.push(link.href)}
                radius="none"
                size="content"
                variant="link"
              >
                {link.label}
              </Button>
            </View>
          </View>

          {children}
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
}
