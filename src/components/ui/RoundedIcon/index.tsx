import { cn } from '@utils';
import { View, type ViewProps } from 'react-native';

export function RoundedIcon({ className, ...props }: ViewProps) {
  return (
    <View
      className={cn(
        'flex size-[42px] items-center justify-center rounded-full bg-gray-2',
        className
      )}
      {...props}
    />
  );
}
