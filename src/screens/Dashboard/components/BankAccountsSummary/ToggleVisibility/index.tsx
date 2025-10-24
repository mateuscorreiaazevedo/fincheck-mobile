import { colors } from '@assets/styles/colors';
import { ACTIVE_OPACITY, EyeClosedIcon, EyeOpenedIcon } from '@components/ui';
import { useCallback, useState } from 'react';
import { TouchableOpacity } from 'react-native';

export function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggleVisibility = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  const Icon = isVisible ? EyeOpenedIcon : EyeClosedIcon;

  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      className="size-12 items-center justify-center"
      onPress={handleToggleVisibility}
    >
      <Icon color={colors.white} height={24} width={24} />
    </TouchableOpacity>
  );
}
