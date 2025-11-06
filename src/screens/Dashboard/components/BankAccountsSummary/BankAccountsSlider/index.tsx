import type { BankAccountModel } from '@models/bank-accounts';
import { FlatList, View } from 'react-native';
import { CreateAccountButton } from './CreateAccountButton';
import { BankAccountsSliderItem } from './SliderItem';

interface BankAccountsSliderProps {
  bankAccounts: BankAccountModel[];
  hasBankAccounts: boolean;
}

export function BankAccountsSlider({
  bankAccounts,
  hasBankAccounts,
}: BankAccountsSliderProps) {
  return (
    <View>
      {!hasBankAccounts && <CreateAccountButton />}
      {hasBankAccounts && (
        <FlatList
          contentContainerClassName="gap-2 items-center"
          data={bankAccounts}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({ item }) => <BankAccountsSliderItem item={item} />}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}
