import { cn } from '@shared/utils/cn';
import type { ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Container({ className, ...props }: ViewProps) {
  return (
    <SafeAreaView className={cn('flex-1 bg-gray-0', className)} {...props} />
  );
}
