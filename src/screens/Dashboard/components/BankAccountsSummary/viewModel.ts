import { colors } from '@assets/styles/colors';
import type { BankAccountModel } from '@models/bank-accounts';
import { useEffect, useState } from 'react';

const MOCK_ACCOUNTS: BankAccountModel[] = [
  {
    id: '1',
    name: 'Nubank',
    initialBalanceInCents: 500_000,
    accountType: 'CHECKING',
    color: colors.violet[5],
    createdAt: '2023-01-01T00:00:00Z',
    userId: '',
    currentBalanceInCents: 750_000,
  },
  {
    id: '2',
    name: 'Banco do Brasil',
    initialBalanceInCents: 500_000,
    accountType: 'INVESTMENT',
    color: colors.yellow[5],
    createdAt: '2023-01-01T00:00:00Z',
    userId: '',
    currentBalanceInCents: 50_000,
  },
  {
    id: '3',
    name: 'Carteira',
    initialBalanceInCents: 500_000,
    accountType: 'CASH',
    color: colors.green[5],
    createdAt: '2023-01-01T00:00:00Z',
    userId: '',
    currentBalanceInCents: 0,
  },
];

export function useBankAccountsSummaryViewModel() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function load() {
      const delay = 1000;

      new Promise(resolve => setTimeout(resolve, delay)).finally(() => {
        setIsLoading(false);
      });
    }

    load();
  }, []);

  const totalBalanceInCents = MOCK_ACCOUNTS.reduce(
    (acc, account) => acc + (account.currentBalanceInCents || 0),
    0
  );

  return {
    isLoading,
    totalBalanceInCents,
    bankAccounts: MOCK_ACCOUNTS,
    hasBankAccounts: !!MOCK_ACCOUNTS.length,
  };
}
