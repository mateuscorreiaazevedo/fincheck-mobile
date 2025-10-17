import type { Radius, Size, Variant } from '@shared/types/Styles';
import { cn } from '@shared/utils/cn';
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native';
import { Text } from '../Text';

interface ButtonProps extends TouchableOpacityProps {
  variant?: Variant;
  size?: Size;
  radius?: Radius;
  textClassName?: string;
}

const ACTIVE_OPACITY = 0.7;

export function Button({
  children,
  className,
  activeOpacity,
  variant = 'primary',
  radius = 'default',
  size = 'md',
  textClassName,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={activeOpacity ?? ACTIVE_OPACITY}
      className={cn(
        'items-center justify-center disabled:opacity-50',
        {
          'bg-teal-9': variant === 'primary',
          'bg-gray-2': variant === 'secondary',
          'bg-red-8': variant === 'danger',
          'bg-transparent': ['ghost', 'link', 'destructive'].includes(variant),
          'h-10 px-1': size === 'sm',
          'h-[54px] px-2': size === 'md',
          'h-14 px-4': size === 'lg',
          'size-12': size === 'icon',
          'h-fit w-fit p-0': size === 'content',
          'rounded-2xl': radius === 'default',
          'rounded-full': radius === 'full',
          'rounded-none': radius === 'none',
        },
        className
      )}
    >
      <Text
        className={cn(
          'font-500',
          {
            'text-white': ['primary', 'danger'].includes(variant),
            'text-gray-7': ['ghost', 'secondary'].includes(variant),
            'text-sm text-teal-9': variant === 'link',
            'text-red-8': variant === 'destructive',
            'text-sm': size === 'sm',
            'text-base': size === 'md',
            'text-xl': size === 'lg',
          },
          textClassName
        )}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
