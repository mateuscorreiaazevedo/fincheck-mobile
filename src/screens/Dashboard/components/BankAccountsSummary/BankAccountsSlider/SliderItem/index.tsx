import { Text } from '@components/ui';
import { View } from 'react-native';
import type { BankAccount } from '../viewModel';

interface BankAccountsSliderItemProps {
  item: BankAccount;
}

export function BankAccountsSliderItem({ item }: BankAccountsSliderItemProps) {
  return (
    <View className="h-[204px] w-[260px] justify-between rounded-2xl bg-white p-4">
      <Text className="font-600 text-lg">{item.name}</Text>
      <Text className="mt-2 text-base">{item.balance}</Text>
    </View>
  );
}
