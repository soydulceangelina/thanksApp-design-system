import { primary, neutral } from "./colors";
import { primary_font_family } from "./typography";

export const defaultTheme = {
  primaryColor: primary[300],
  primaryHoverColor: primary[400],
  primaryActiveColor: primary[200],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  disabledColor: primary[100],
  primary_font_family,
};