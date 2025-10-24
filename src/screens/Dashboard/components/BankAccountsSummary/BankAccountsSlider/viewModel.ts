export type BankAccount = {
  id: string;
  name: string;
  balance: string;
};

const MOCK_ACCOUNTS: BankAccount[] = [
  { id: '1', name: 'Conta Corrente', balance: 'R$ 5.000,00' },
  { id: '2', name: 'Poupança', balance: 'R$ 3.500,00' },
  { id: '3', name: 'Investimentos', balance: 'R$ 4.000,00' },
];

export function useBankAccountsSliderViewModel() {
  return {
    bankAccounts: MOCK_ACCOUNTS,
    hasBankAccounts: !!MOCK_ACCOUNTS.length,
  };
}
