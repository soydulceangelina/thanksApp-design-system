import styled from 'styled-components';
import { defaultTheme, typeScale } from '../utils';

const Button = styled.button `
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 5px;
    min-width: 100px;
    cursor: pointer;
    font-family: ${defaultTheme.primary_font_family};
`

export const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    color: ${defaultTheme.textColorOnPrimary};
    border: none;
`

export const SecondaryButton = styled(Button)`
    border: 3px solid ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor};
    background: none;
`

export const TertiaryButton = styled(Button)`
    border: none;
    color: ${defaultTheme.primaryColor};
    background: none;
`