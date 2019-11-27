import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Formulario = styled.View`
  align-self: stretch;
  padding: 30px;
  margin-top: 30px;
`;

export const Titulo = styled.Text`
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 8;
`;

export const FormInput = styled(Input)`  
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  height: 42px;
  background-color: #f05a5b;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;

export const ButtonLabel = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
`;

