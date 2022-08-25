import { ThemedButtonContainer, ThemedButtonVariant } from "./ButtonWithThemedStyledComponent.styles";

interface ThemedButtonProps {
  variant?: ThemedButtonVariant;
}

export function ButtonWithThemedStyledComponent({ variant = 'primary' }: ThemedButtonProps) {
  return <ThemedButtonContainer variant={variant}>Enviar</ThemedButtonContainer>;
}
