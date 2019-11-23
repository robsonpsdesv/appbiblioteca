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
  align-items: stretch;
  padding: 0 30px;
  margin-top: 10px;
  background-color: #0000FF;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})
  ``
export const Titulo = styled.Text`
  font-size: 18px;
  margin-top: 30px;
  color: #FFF;
  font-weight: bold;
  text-align: center;
`;

export const Form = styled.View`
  align-self: stretch;
  padding: 30px;
`;

export const Card = styled.View`  
  flex: 1;
  align-self: stretch;
  background-color: #FFF;
  border-radius: 5px;
  padding: 10px;
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