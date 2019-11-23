import React, { useState } from 'react';
import { Alert } from 'react-native';
import api from '../../services/api';

import { Container, Form, Titulo, Label, FormInput, SubmitButton, ButtonLabel } from './styles'

export default function GeneroCad() {
    const [descricao, setDescricao] = useState('');
    async function handleSubmit() {
        try {
            const response = await api.post('/generos',
                {
                    descricao
                });
            Alert.alert('Genero salvo com sucesso!');
            setDescricao('');
        } catch (error) {
            Alert.alert('Erro ao realizar a operação, tente novamente mais tarde!');
            console.log(error.message);
            throw error;
        }
    }
    return (
        <Container>
            <Form>
                <Titulo>Cadastro de Genero</Titulo>
                <Label>Descrição: *</Label>
                <FormInput
                    placeholder="Descrição do genero"
                    placeholderTextColor="#999"
                    value={descricao}
                    onChangeText={setDescricao} />
                <SubmitButton onPress={handleSubmit}>
                    <ButtonLabel>Salvar</ButtonLabel>
                </SubmitButton>
            </Form>
        </Container>
    );
}
