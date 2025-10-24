import { FlatList, View } from 'react-native';
import { CreateAccountButton } from './CreateAccountButton';
import { BankAccountsSliderItem } from './SliderItem';
import { useBankAccountsSliderViewModel } from './viewModel';

export function BankAccountsSlider() {
  const { bankAccounts, hasBankAccounts } = useBankAccountsSliderViewModel();

  return (
    <View>
      {!hasBankAccounts && <CreateAccountButton />}
      {hasBankAccounts && (
        <FlatList
          contentContainerClassName="gap-2"
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
