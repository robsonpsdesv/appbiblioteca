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

export default function EnderecoList() {
    const [enderecos, setEnderecos] = useState([]);
    async function carregarEnderecos() {
        const response = await api.get('/enderecos');

        setEnderecos(response.data);
    }
    carregarEnderecos();
    return (
        <Container>
            <Titulo>Lista de Endereco</Titulo>
            <List data={enderecos}
                keyExtractor={endereco => `${endereco.id}`}
                renderItem={({ item }) => (
                    <Form>
                        <Card>
                            <Label>Id: {item.id}</Label>
                            <Label>Rua: {item.rua}</Label>
                            <Label>Bairro: {item.bairro}</Label>
                            <Label>Quadra: {item.quadra}</Label>
                            <Label>Lote: {item.lote}</Label>
                            <Label>Numero: {item.numero}</Label>
                            <Label>Complemento: {item.complemento}</Label>
                            <Label>Cidade: {item.cidade}</Label>
                            <Label>Estado: {item.estado}</Label>
                            <Label>Pais: {item.pais}</Label>
                            <TouchableOpacity
                                onPress={async () => {
                                    const id = item.id;
                                    await api.delete(`/enderecos/${id}`)
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
