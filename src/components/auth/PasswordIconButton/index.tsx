import { colors } from '@assets/styles/colors';
import { Button, EyeClosedIcon, EyeOpenedIcon } from '@components/ui';
import { cn } from '@utils/cn';

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
