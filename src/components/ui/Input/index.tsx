import { cn } from '@shared/utils/cn';
import { colors } from '@src/assets/styles/colors';
import type { ReactNode } from 'react';
import { TextInput, type TextInputProps, View } from 'react-native';
import { CrossCircleIcon } from '../icons';
import { Text } from '../Text';

interface InputProps extends TextInputProps {
  error?: string;
  endComponent?: ReactNode;
}

export function Input({
  className,
  placeholder,
  error,
  endComponent,
  ...props
}: InputProps) {
  return (
    <View>
      <View className="relative">
        <TextInput
          className={cn(
            'h-[52px] w-full rounded-lg border border-gray-5 bg-white px-3 py-2 focus:border-gray-8',
            !!placeholder && 'pt-4',
            !!error && 'border-red-8',
            !!endComponent && 'pr-10',
            className
          )}
          {...props}
        />
        {placeholder && (
          <Text className={cn('absolute top-1 left-3 text-xs')}>
            {placeholder}
          </Text>
        )}
        {endComponent && (
          <View className="absolute top-0 right-0 flex h-full w-10 items-center justify-center rounded-r-lg">
            {endComponent}
          </View>
        )}
      </View>
      {error && (
        <View className="mt-1 flex-row items-center gap-1">
          <CrossCircleIcon color={colors.red[8]} height={14} width={14} />
          <Text className="text-red-8 text-xs">{error}</Text>
        </View>
      )}
    </View>
  );
}
