import React, { useState } from 'react';
import { Alert, Picker } from 'react-native';
import api from '../../services/api';

import {
    Container,
    Formulario,
    Titulo,
    Label,
    FormInput,
    SubmitButton,
    ButtonLabel
} from './styles'

export default function EmprestimoCad() {
    const [dataDoEmprestimo, setDataDoEmprestimo] = useState("");
    const [dataDaDevolucao, setDataDaDevolucao] = useState("");
    const [valorDoEmprestimo, setvalorDoEmprestimo] = useState("");
    const [idCliente, setIdCliente] = useState("");
    const [clientes, setClientes] = useState([]);
    const [idLivro, setIdLivro] = useState("");
    const [livros, setLivros] = useState([]);

    function carregarCombos() {
        async function carregarClientes() {
            const response = await api.get("/clientes");
            setClientes(response.data);
        }
        carregarClientes();
        async function carregarLivros() {
            const response = await api.get("/livros");
            setLivros(response.data);
        }
        carregarLivros();
    }

    async function handleSubmit() {
        try {
            if (idCliente === "") {
                Alert.alert("CLIENTE");
            } else if (idLivro === "") {
                Alert.alert("LIVRO");
            } else {
                const response = await api.post("/emprestimos", {
                    dataDoEmprestimo,
                    dataDaDevolucao,
                    valorDoEmprestimo,
                    cliente: { id: idCliente },
                    livro: { id: idLivro }
                });
                Alert.alert("Emprestimo salvo com sucesso");
                setDataDoEmprestimo("");
                setDataDaDevolucao("");
                setvalorDoEmprestimo("");
                setIdCliente("");
                setIdLivro("");
            }
        } catch (error) {
            console.log(error.response);
            Alert.alert("Erro ao realizar a operação, tente novamente mais tarde");
        }
    }
    return (
        <Container>
            <Formulario>
                <Titulo>Cadastro de Empréstimos</Titulo>
                <Label>Data do Empréstimo: *</Label>
                <FormInput
                    onChangeText={carregarCombos}
                    placeholder="Data empréstimo livro"
                    placeholderTextColor="#999"
                    format="YYYY-MM-DD"
                    value={dataDoEmprestimo}
                    onChangeText={setDataDoEmprestimo} />
                <Label>Data da devolução: *</Label>
                <FormInput
                    placeholder="Data devolução"
                    placeholderTextColor="#999"
                    format="YYYY-MM-DD"
                    value={dataDaDevolucao}
                    onChangeText={setDataDaDevolucao} />
                <Label>Valor: *</Label>
                <FormInput
                    placeholder="Valor do empréstimo"
                    placeholderTextColor="#999"
                    value={valorDoEmprestimo}
                    onChangeText={setValorDoEmprestimo} />
                <Label>Cliente: *</Label>
                <Picker selectedValue={idCliente} onValueChange={setIdCliente}>
                    <Picker.Item label="CLIENTE" value="" />
                    {clientes.map(cliente => {
                        return (
                            <Picker.Item
                                key={cliente.id}
                                label={cliente.nome}
                                value={cliente.id}
                            />
                        );
                    })}
                </Picker>
                <Label>Livro: *</Label>
                <Picker selectedValue={idLivro} onValueChange={setIdLivro}>
                    <Picker.Item label="LIVRO" value="" />
                    {livros.map(livro => {
                        return (
                            <Picker.Item key={livro.id} label={livro.nome} value={livro.id} />
                        );
                    })}
                </Picker>
                <SubmitButton onPress={handleSubmit}>
                    <ButtonLabel>Salvar</ButtonLabel>
                </SubmitButton>
            </Formulario>
        </Container>
    );
}
