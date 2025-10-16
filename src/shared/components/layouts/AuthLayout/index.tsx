import { Container } from '@shared/components/ui/Container';
import { Logo } from '@shared/components/ui/Logo';
import { Text } from '@shared/components/ui/Text';
import { colors } from '@src/assets/styles/colors';
import { type Href, useRouter } from 'expo-router';
import type { PropsWithChildren } from 'react';
import { TouchableOpacity, View } from 'react-native';

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
    <Container className="items-center justify-center gap-16">
      <Logo color={colors.gray[5]} height={24} width={104} />
      <View>
        <View className="mb-12">
          <Text className="text-center font-sans-bold text-2xl text-gray-9 tracking-[-1px]">
            {title}
          </Text>
          <View className="flex-row gap-2">
            <Text className="text-gray-7 tracking-[-0.5px]">{subtitle}</Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push(link.href)}
            >
              <Text className="font-sans-medium text-teal-9">{link.label}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {children}
      </View>
    </Container>
  );
}
