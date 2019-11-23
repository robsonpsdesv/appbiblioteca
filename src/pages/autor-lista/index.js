import React, { useState } from 'react';

import { Container, Form, List, Card, Titulo, Label } from './styles'
import api from '../../services/api';

export default function AutorList() {
    const [autors, setAutors] = useState([]);
    async function carregarAutors() {
        const response = await api.get('/autores');

        setAutors(response.data);
    }
    carregarAutors();
    return (
        <Container>
            <Titulo>Lista de Autor</Titulo>
            <List data={autors}
                keyExtractor={autor => `${autor.id}`}
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
