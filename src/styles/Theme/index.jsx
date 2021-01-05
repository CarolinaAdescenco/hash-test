const size = {
  s: '600px',
  md: '900px',
  lg: '1200px',
};

export const colors = {
  blue1: '#3D75BB',
  blue2: '#5D9CEC',
  blue3: '#66AFE9',

  gray1: '#656565',
  gray2: '#DDE6E9',
  gray3: '#D1DCE3',
  gray4: '#CECECE',

  white: '#FFFFFF',
  white2: '#F2F2F2',

  dark: '#000000',
};

export const device = {
  s: `(min-width: ${size.s})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
};

export default { colors, device };
