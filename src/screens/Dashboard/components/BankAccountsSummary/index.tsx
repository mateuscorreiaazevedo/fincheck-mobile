import { colors } from '@assets/styles/colors';
import { Text } from '@components/ui';
import { ActivityIndicator, View } from 'react-native';
import { BankAccountsSlider } from './BankAccountsSlider';
import { ToggleVisibility } from './ToggleVisibility';
import { useBankAccountsSummaryViewModel } from './viewModel';

export function BankAccountsSummary() {
  const { isLoading } = useBankAccountsSummaryViewModel();

  return (
    <View className="mb-8 flex-1 rounded-2xl bg-teal-9 px-4 py-8">
      {isLoading && (
        <View className="h-[400] flex-1 items-center justify-center">
          <ActivityIndicator color={colors.teal[4]} size={'large'} />
        </View>
      )}
      {!isLoading && (
        <>
          <View className="mb-10">
            <Text className="text-base text-white">Saldo total</Text>
            <View className="flex-row items-center gap-2">
              <Text className="mt-1 font-700 text-3xl text-white">
                R$ 12.345,67
              </Text>
              <ToggleVisibility />
            </View>
          </View>

          <BankAccountsSlider />
        </>
      )}
    </View>
  );
}
