import React, { useState } from 'react';

import {
    Container,
    Form,
    List,
    Card,
    Titulo,
    Label,
    Excluir
} from './styles'
import api from '../../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LivroList() {
    const [livros, setLivros] = useState([])
    async function carregarLivros() {
        const response = await api.get('/livros');

        setLivros(response.data);
    }
    carregarLivros();
    return (
        <Container>
            <Titulo>Lista de Livros</Titulo>
            <List data={livros}
                keyExtractor={livro => `${livro.id}`}
                renderItem={({ item }) => (
                    <Form>
                        <Card>
                            <Label>Id: {item.id}</Label>
                            <Label>Nome: {item.nome}</Label>
                            <Label>Valor: {item.valor}</Label>
                            <Label>Volume: {item.volume}</Label>
                            <Label>Data Publicação: {item.dataPublicacao}</Label>
                            <Label>Genero: {item.genero.descricao}</Label>
                            <Label>Editora: {item.editora.nome}</Label>
                            <Label>Autor: {item.autor.nome}</Label>
                            <TouchableOpacity
                                onPress={async () => {
                                    const id = item.id;
                                    await api.delete(`/livros/${id}`)
                                }}
                            >
                                <Excluir>Excluir</Excluir>
                            </TouchableOpacity>
                        </Card>
                    </Form>
                )}
            />
        </Container>
    );
}
