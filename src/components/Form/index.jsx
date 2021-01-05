import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Input from '../Input';

import {
  FormWrapper,
  FormTitle,
  ResultWrapper,
  Title,
  ContentWrapper,
  TextResult,
  Text,
} from './styles';

const Form = () => {
  const [amount, setAmount] = useState('');
  const [installments, setInstallments] = useState('');
  const [mdr, setMdr] = useState('');
  const [day01, setDay01] = useState();
  const [day15, setDay15] = useState();
  const [day30, setDay30] = useState();
  const [day90, setDay90] = useState();

  const formatCurrency = useCallback(number => {
    return number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }, []);

  useEffect(() => {
    if (amount !== '' && installments !== '' && mdr !== '') {
      const data = {
        amount,
        installments,
        mdr,
      };

      axios
        .post('https://hash-front-test.herokuapp.com/', data)
        .then(response => {
          setDay01(formatCurrency(response.data[1]));
          setDay15(formatCurrency(response.data[15]));
          setDay30(formatCurrency(response.data[30]));
          setDay90(formatCurrency(response.data[90]));
        })
        .catch(error => {
          if (error.response.status === 400) {
            toast.error(
              'Não foi possível realizar esta ação no momento. Tente novamente mais tarde!',
            );
          }
        });
    }
  }, [amount, installments, mdr]);

  return (
    <>
      <FormWrapper>
        <FormTitle>Simule sua antecipação</FormTitle>
        <Input
          type="number"
          pattern="[0-9]*"
          data-cy="amount"
          margin="0 0 26px 0"
          label="Informe o valor da venda*"
          onChange={e => {
            setAmount(e.target.value);
          }}
        />
        <Input
          data-cy="installments"
          margin="0 0 26px 0"
          onChange={e => setInstallments(e.target.value)}
          label="Em quantas parcelas*"
          info="Máximo de 12 parcelas"
          min="1"
          max="12"
          type="number"
        />

        <Input
          type="number"
          margin="0 0 44px 0"
          data-cy="mdr"
          onChange={e => setMdr(e.target.value)}
          label="Informe o percentual MDR*"
        />
      </FormWrapper>

      <ResultWrapper>
        <Title>Você reberá:</Title>

        <ContentWrapper>
          <Text>
            Amanhã:
            <TextResult>{day01 || 'R$ 0,00'}</TextResult>
          </Text>

          <Text>
            Em 15 dias:
            <TextResult>{day15 || 'R$ 0,00'}</TextResult>
          </Text>

          <Text>
            Em 30 dias:
            <TextResult>{day30 || 'R$ 0,00'}</TextResult>
          </Text>

          <Text>
            Em 90 dias:
            <TextResult>{day90 || 'R$ 0,00'}</TextResult>
          </Text>
        </ContentWrapper>
      </ResultWrapper>
    </>
  );
};

export default Form;
