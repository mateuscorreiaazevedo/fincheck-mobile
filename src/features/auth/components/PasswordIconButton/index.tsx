import { Button } from '@shared/components/ui/Button';
import { EyeClosedIcon, EyeOpenedIcon } from '@shared/components/ui/icons';
import { cn } from '@shared/utils/cn';
import { colors } from '@src/assets/styles/colors';

interface PasswordIconButtonProps {
  onClick?: VoidFunction;
  visible?: boolean;
}

export function PasswordIconButton({
  onClick,
  visible,
}: PasswordIconButtonProps) {
  const Icon = visible ? EyeOpenedIcon : EyeClosedIcon;

  return (
    <Button
      className={cn(!visible && 'pt-0.5')}
      onPress={onClick}
      radius="full"
      size="icon"
      variant="ghost"
    >
      <Icon color={colors.gray[7]} height={20} width={20} />
    </Button>
  );
}
