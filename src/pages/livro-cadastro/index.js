import React, { useState } from 'react';
import {
    Alert, Picker
} from 'react-native';

import api from '../../services/api';

import {
    Container, Titulo, Form, FormInput, SubmitButton, ButtonLabel
} from './styles'

export default function LivroCad() {
    const [nome, setNome] = useState('');
    const [volume, setVolume] = useState('');
    const [dataPublicacao, setDataPublicacao] = useState('');
    const [valor, setValor] = useState('');
    const [idGenero, setIdGenero] = useState('');
    const [generos, setGeneros] = useState([]);
    async function carregarGeneros() {
        const response = await api.get('/generos');
        setGeneros(response.data);
    }
    carregarGeneros();
    async function handleSubmit() {
        try {

            const response = api.post('/livros', {
                nome,
                volume,
                valor,
                dataPublicacao,
                genero: { id: idGenero }
            });
            Alert.alert("Livro salvo com sucesso!");
            setNome('');
            setVolume('');
            setValor('');
            setDataPublicacao('');
            setIdGenero('');
        } catch (error) {
            console.log(error);
            Alert.alert("Erro ao realizar a operação, tente novamente mais tarde!");
        }
    }
    return (
        <Container>
            <Titulo>Cadastro de livro</Titulo>
            <Form>
                <FormInput
                    placeholder="Nome do livro"
                    placeholderTextColor="#999"
                    value={nome}
                    onChangeText={setNome} />
                <FormInput
                    placeholder="Volume"
                    placeholderTextColor="#999"
                    value={volume}
                    onChangeText={setVolume}
                    keyboardType="numeric" />
                <FormInput
                    placeholder="Valor"
                    placeholderTextColor="#999"
                    value={valor}
                    onChangeText={setValor}
                    keyboardType="decimal-pad" />
                <FormInput
                    placeholder="Data de publicação"
                    placeholderTextColor="#999"
                    value={dataPublicacao}
                    onChangeText={setDataPublicacao}
                    keyboardType="numeric" />
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
