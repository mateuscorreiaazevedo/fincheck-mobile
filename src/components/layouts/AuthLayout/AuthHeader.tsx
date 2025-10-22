import { Button, Text } from '@components/ui';
import { NUMBER_CONSTANTS as c } from '@constants';
import { useNavigate, useWatchKeyboard } from '@hooks';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  link: {
    href: string;
    label: string;
  };
}

export function AuthHeader({ title, subtitle, link }: AuthHeaderProps) {
  const { navigate } = useNavigate();
  const { bottom } = useSafeAreaInsets();
  const { isKeyboardVisible } = useWatchKeyboard();

  return (
    <View style={{ marginBottom: isKeyboardVisible ? bottom : c.GAP_LG }}>
      <Text className="text-center font-700 text-2xl text-gray-9 tracking-[-1px]">
        {title}
      </Text>
      <View className="flex-row justify-center gap-2">
        <Text className="text-gray-7 text-sm tracking-[-0.5px]">
          {subtitle}
        </Text>

        <Button
          activeOpacity={0.7}
          onPress={() => navigate(link.href)}
          radius="none"
          size="content"
          variant="link"
        >
          {link.label}
        </Button>
      </View>
    </View>
  );
}
