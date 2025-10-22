import { colors } from '@assets/styles/colors';
import { cn } from '@utils';
import { View } from 'react-native';
import { CrossCircleIcon } from '../icons';
import { Text } from '../Text';

interface Props {
  error?: string;
  className?: string;
}

export function FieldError({ error, className }: Props) {
  if (!error) {
    return null;
  }

  return (
    <View className={cn('flex-row items-center gap-1', className)}>
      <CrossCircleIcon color={colors.red[8]} height={14} width={14} />
      <Text className="text-red-8 text-xs">{error}</Text>
    </View>
  );
}
