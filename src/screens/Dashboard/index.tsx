import { PrivateLayout } from '@components/layouts';
import { BankAccountsSummary } from './components/BankAccountsSummary';
import { TransactionsList } from './components/TransactionsList';

export default function DashboardScreen() {
  return (
    <PrivateLayout>
      <BankAccountsSummary />
      <TransactionsList />
    </PrivateLayout>
  );
}
