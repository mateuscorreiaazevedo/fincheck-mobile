import { CardIcon, CashIcon, MixerIcon } from '@components/ui';
import type { BankAccountType } from '@models/bank-accounts';
import type { IconProps } from '@types';
import type { ComponentType } from 'react';

interface BankAccountSliderItemIcon extends IconProps {
  type: BankAccountType;
}

export function BankAccountsSliderItemIcon({
  type,
  ...props
}: BankAccountSliderItemIcon) {
  const iconByAccountType: Record<BankAccountType, ComponentType<IconProps>> = {
    CHECKING: CardIcon,
    INVESTMENT: MixerIcon,
    CASH: CashIcon,
  };

  const Icon = iconByAccountType[type];

  return <Icon {...props} />;
}
