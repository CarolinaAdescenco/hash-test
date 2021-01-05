import styled from 'styled-components';
import { colors } from '../../styles/Theme';

export const FormWrapper = styled.div`
  padding: 41px 70px 44px 56px;
  background: ${colors.white};
  border-radius: 4px 0 0 4px;
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  line-height: 30.17px;
  font-weight: 700;
  color: ${colors.gray1};
  margin: 0 0 22px 0;
`;

export const ResultWrapper = styled.div`
  background: ${colors.gray3};
  width: 100%;
  max-width: 231px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 35px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-style: italic;
  color: ${colors.blue1};
  text-transform: uppercase;
  line-height: 20.11px;

  width: 100%;
  border-bottom: 1px solid ${colors.blue2};
`;

export const Text = styled.p`
  font-style: italic;
  color: ${colors.blue2};
  font-size: 15px;
  white-space: nowrap;
`;

export const TextResult = styled.strong`
  margin-left: 5px;
`;

export const ContentWrapper = styled.div``;
