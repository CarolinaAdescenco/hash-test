import { createGlobalStyle } from 'styled-components';
import { colors, device } from '../Theme';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');

  body{
    font-family: 'Source Sans Pro';
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px auto;
    background: ${colors.white2};

    @media ${device.md}{
      margin: 0px;
      height: 100vh;
    }
  }
`;
