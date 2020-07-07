const colors = {
  $white: '#FFFFFF',
  $white50: '#FAFBFC',
  $gray: '#F0F2F7',
  $gray30: '#e3e6ec',
  $gray50: '#CFD3DA',
  $gray70: '#B2B6BE',
  $gray80: '#9FA3AC',
  $gray110: '#61656D',
  $black: '#000000',
  $red: '#E6174B',
  $blue: '#0055FF',
  $orange: '#FBB040',
};

const fonts = {
  $fontRegular: 'FuturaNewMedium-Reg',
  $fontSemibold: 'FuturaNewBold-Reg',
  $fontBold: 'FuturaNewBold-Reg',
};

export const stylesheetConfig = { ...fonts, ...colors };

export type ColorsType = keyof typeof colors;
