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
    const [clientes, setClientes] = useState([])
    async function carregarClientes() {
        const response = await api.get('/clientes');

        setClientes(response.data);
    }
    carregarClientes();
    return (
        <Container>
            <Titulo>Lista de Clientes</Titulo>
            <List data={clientes}
                keyExtractor={cliente => `${cliente.id}`}
                renderItem={({ item }) => (
                    <Form>
                        <Card>
                            <Label>Id: {item.id}</Label>
                            <Label>Nome: {item.nome}</Label>
                            <Label>Nome: {item.cpf}</Label>
                            <Label>Nome: {item.email}</Label>
                            <Label>Nome: {item.telefone}</Label>
                            <Label>Nome: {item.endereco.rua}</Label>
                            <TouchableOpacity
                                onPress={async () => {
                                    const id = item.id;
                                    await api.delete(`/clientes/${id}`)
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
