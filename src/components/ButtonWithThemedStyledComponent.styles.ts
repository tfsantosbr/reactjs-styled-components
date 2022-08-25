import styled, { css } from 'styled-components';

export type ThemedButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ThemedButtonContainerProps {
    variant: ThemedButtonVariant;
}

export const ThemedButtonContainer = styled.button<ThemedButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border:0;
    margin: 8px;

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
`
