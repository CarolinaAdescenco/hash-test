import styled from 'styled-components';
import { colors, device } from '../../styles/Theme';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px 0;

  @media ${device.md} {
    margin: ${({ margin }) => margin};
  }
`;

export const Label = styled.label`
  color: ${colors.gray1};
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 6px;
`;

export const InputForm = styled.input`
  border: 1px solid ${colors.gray2};
  border-radius: 4px;
  font-size: 14px;
  padding: 10px 14px 9px 14px;
  outline: none;

  &:focus {
    border-color: ${colors.blue3};
  }

  @media ${device.md} {
    width: 251px;
  }
`;

export const Info = styled.span`
  font-weight: 700;
  font-size: 11px;
  margin-top: 3px;
  color: ${colors.gray4};
`;
