import React, { useState } from 'react';
import { Alert, Picker } from 'react-native';
import api from '../../services/api';

import { Container, Form, Titulo, Label, FormInput, SubmitButton, ButtonLabel } from './styles'

export default function AutorCad() {
    const [descricao, setDescricao] = useState('');
    async function handleSubmit() {
        try {
            const response = await api.post('/autores',
                {
                    descricao
                });
            Alert.alert('Autor salvo com sucesso!');
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
                <Titulo>Cadastro de Autor</Titulo>
                <Label>Descrição: *</Label>
                <FormInput
                    placeholder="Descrição do autor"
                    placeholderTextColor="#999"
                    value={descricao}
                    onChangeText={setDescricao} />
                <Picker selectedValue={idGenero}
                    onValueChange={setIdGenero}>
                    {
                        generos.map((genero) => {
                            return <Picker.Item key={genero.id}
                                label={genero.descricao}
                                value={genero.id} />
                        })
                    }
                </Picker>
                <SubmitButton onPress={handleSubmit}>
                    <ButtonLabel>Salvar</ButtonLabel>
                </SubmitButton>
            </Form>
        </Container>
    );
}
