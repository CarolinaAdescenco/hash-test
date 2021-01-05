import { createGlobalStyle } from 'styled-components';
import { colors } from '../Theme';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');

  body{
    font-family: 'Source Sans Pro';
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background: ${colors.white2};
  }
`;
