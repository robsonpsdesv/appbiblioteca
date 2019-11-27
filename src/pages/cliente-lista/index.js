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

export default function ClienteList() {
    const [autores, setAutores] = useState([])
    async function carregarAutores() {
        const response = await api.get('/autores');

        setAutores(response.data);
    }
    carregarAutores();
    return (
        <Container>
            <Titulo>Lista de Autores</Titulo>
            <List data={autores}
                keyExtractor={autores => `${autores.id}`}
                renderItem={({ item }) => (
                    <Form>
                        <Card>
                            <Label>Id: {item.id}</Label>
                            <Label>Nome: {item.descricao}</Label>
                            <TouchableOpacity
                                onPress={async () => {
                                    const id = item.id;
                                    await api.delete(`/autores/${id}`)
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
