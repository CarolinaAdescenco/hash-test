import styled from 'styled-components';
import { colors, device } from '../../styles/Theme';

export const BoxWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid ${colors.gray3};

  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;

  @media ${device.md} {
    flex-direction: row;
    height: 389px;
  }
`;
