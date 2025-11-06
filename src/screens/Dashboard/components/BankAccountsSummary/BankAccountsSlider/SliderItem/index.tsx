import { colors } from '@assets/styles/colors';
import { RoundedIcon, Text } from '@components/ui';
import type { BankAccountModel } from '@models/bank-accounts';
import { View } from 'react-native';
import { BankAccountsSliderItemIcon } from './Icon';

interface BankAccountsSliderItemProps {
  item: BankAccountModel;
}

export function BankAccountsSliderItem({ item }: BankAccountsSliderItemProps) {
  return (
    <View
      className="h-[204px] min-w-[260px] justify-between rounded-2xl border-b-4 bg-white p-4"
      style={{
        borderBottomColor: item.color,
      }}
    >
      <View className="gap-4">
        <RoundedIcon>
          <BankAccountsSliderItemIcon
            color={colors.gray[7]}
            height={24}
            type={item.accountType}
            width={24}
          />
        </RoundedIcon>
        <Text className="font-500 text-base">{item.name}</Text>
      </View>
      <View>
        <Text className="text-base">{item.currentBalanceInCents}</Text>
        <Text className="text-gray-6 text-sm">Saldo atual</Text>
      </View>
    </View>
  );
}
