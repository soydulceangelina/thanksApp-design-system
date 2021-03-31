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
    transition: background-color 0.2s linear, color 0.2s linear;

    &:hover { 
        background-color: ${defaultTheme.primaryHoverColor};
        color: ${defaultTheme.textColorOnPrimary};
    }

    &:focus { 
        background-color: ${defaultTheme.primaryHoverColor};
        color: ${defaultTheme.textColorOnPrimary};
        box-shadow: 0px 0px 10px 4px ${defaultTheme.primaryColor};
        outline: none;
    }

    &:active {
        background-color: ${defaultTheme.primaryActiveColor};
        color: ${defaultTheme.textColorOnPrimary};
    }

    &:disabled {
        background-color: ${defaultTheme.disabledColor};
        color: ${defaultTheme.textColorOnPrimary}; 
        cursor: not-allowed;
    }

`

export const SecondaryButton = styled(Button)`
    border: 3px solid ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor};
    background: none;
    transition: color 0.2s linear;

    &:hover { 
        background-color: ${defaultTheme.primaryHoverColor};
        color: ${defaultTheme.textColorOnPrimary};
        border: none
    }

    &:focus { 
        background-color: ${defaultTheme.primaryHoverColor};
        color: ${defaultTheme.textColorOnPrimary};
        border: none;
        box-shadow: 0px 0px 10px 4px ${defaultTheme.primaryColor};
        outline: none;
    }

    &:active {
        border: 3px solid ${defaultTheme.primaryActiveColor};
        color: ${defaultTheme.primaryActiveColor};
        background: none;
    }

    &:disabled {
        border: 3px solid ${defaultTheme.disabledColor};
        color: ${defaultTheme.disabledColor};
        background: none;
        cursor: not-allowed;
    }
`

export const TertiaryButton = styled(Button)`
    border: none;
    color: ${defaultTheme.primaryColor};
    background: none;
    transition: color 0.2s linear;

    &:hover { 
        border: 3px solid ${defaultTheme.primaryHoverColor};
        color: ${defaultTheme.primaryHoverColor};
    }

    &:focus {
        border: 3px solid ${defaultTheme.primaryHoverColor};
        color: ${defaultTheme.primaryHoverColor};
        box-shadow: 0px 0px 10px 4px ${defaultTheme.primaryColor};
        outline: none;
    }

    &:active {
        border: none;
        color: ${defaultTheme.primaryActiveColor};
        background: none;
    }

    &:disabled {
        border: none;
        color: ${defaultTheme.disabledColor};
        background: none;
        cursor: not-allowed;
    }
`