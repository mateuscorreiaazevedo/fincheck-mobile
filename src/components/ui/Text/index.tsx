import { cn } from '@shared/utils/cn';
import {
  Text as NativeText,
  type TextProps as NativeTextProps,
} from 'react-native';

interface TextProps extends NativeTextProps {}

export function Text({ className, ...props }: TextProps) {
  return (
    <NativeText
      className={cn('font-400 text-base text-gray-8', className)}
      {...props}
    />
  );
}
