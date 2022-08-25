import { ButtonContainer, ButtonVariant } from './ButtonWithStyledComponent.styles';

interface ButtonProps {
  variant?: ButtonVariant;
}

export function ButtonWithStyledComponent({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
}
