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

export default function EditoraList() {
    const [editoras, setEditoras] = useState([]);
    async function carregarEditoras() {
        const response = await api.get('/editoras');

        setEditoras(response.data);
    }
    carregarEditoras();
    return (
        <Container>
            <Titulo>Lista de Editoras</Titulo>
            <List data={editoras}
                keyExtractor={editora => `${editora.id}`}
                renderItem={({ item }) => (
                    <Form>
                        <Card>
                            <Label>Id: {item.id}</Label>
                            <Label>Nome: {item.nome}</Label>
                            <TouchableOpacity
                                onPress={async () => {
                                    const id = item.id;
                                    await api.delete(`/editoras/${id}`)
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
