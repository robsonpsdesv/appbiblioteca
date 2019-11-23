import React, { useState } from 'react';

import { Container, Form, List, Card, Titulo, Label } from './styles'
import api from '../../services/api';

export default function GeneroList() {
    const [generos, setGeneros] = useState([]);
    async function carregarGeneros() {
        const response = await api.get('/generos');

        setGeneros(response.data);
    }
    carregarGeneros();
    return (
        <Container>
            <Titulo>Lista de Genero</Titulo>
            <List data={generos}
                keyExtractor={genero => `${genero.id}`}
                renderItem={({ item }) => (
                    <Form>
                        <Card>
                            <Label>Id: {item.id}</Label>
                            <Label>Descrição: {item.descricao}</Label>
                        </Card>
                    </Form>
                )}
            />
        </Container>
    );
}
