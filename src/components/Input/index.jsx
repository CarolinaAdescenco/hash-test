import React from 'react';

import { InputForm, InputWrapper, Label, Info } from './styles';

const Input = ({ margin, label, info, onChange, ...props }) => {
  return (
    <InputWrapper margin={margin}>
      <Label>{label}</Label>
      <InputForm {...props} onChange={onChange} />
      <Info>{info}</Info>
    </InputWrapper>
  );
};

export default Input;
