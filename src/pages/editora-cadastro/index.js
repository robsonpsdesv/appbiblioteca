import React, { useState } from 'react';
import { Alert } from 'react-native';
import api from '../../services/api';

import {
    Container,
    Formulario,
    Titulo,
    Label,
    FormInput,
    SubmitButton,
    ButtonLabel
} from './styles'

export default function EditoraCad() {
    const [nome, setNome] = useState('');
    async function handleSubmit() {
        try {
            const response = await api.post('/editoras',
                {
                    nome
                });
            Alert.alert('Editora salvo com sucesso!');
            setNome('');
        } catch (error) {
            Alert.alert('Erro ao realizar a operação, tente novamente mais tarde!');
            console.log(error.message);
            throw error;
        }
    }
    return (
        <Container>
            <Formulario>
                <Titulo>Cadastro de Editora</Titulo>
                <Label>Descrição: *</Label>
                <FormInput
                    placeholder="Descrição do editora"
                    placeholderTextColor="#999"
                    value={nome}
                    onChangeText={setNome} />
                <SubmitButton onPress={handleSubmit}>
                    <ButtonLabel>Salvar</ButtonLabel>
                </SubmitButton>
            </Formulario>
        </Container>
    );
}
