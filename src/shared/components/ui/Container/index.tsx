import { cn } from '@shared/utils/cn';
import { View, type ViewProps } from 'react-native';

export function Container({ className, ...props }: ViewProps) {
  return <View className={cn('flex-1 bg-gray-0', className)} {...props} />;
}
