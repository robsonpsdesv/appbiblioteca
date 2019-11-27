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

export default function ClienteCard() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [idEndereco, setIdEndereco] = useState("");
    const [enderecos, setEnderecos] = useState([]);
    const [sexos, setSexos] = useState([]);
    const [codigoSexo, setCodigoSexo] = useState("");

    function carregarCombos() {
        async function carregarEnderecos() {
            const response = await api.get("/enderecos");
            setEnderecos(response.data);
        }
        carregarEnderecos();

        async function carregarSexos() {
            const response = await api.get("/autores/sexos");

            setSexos(response.data);
        }
        carregarSexos();
    }

    async function handleSubmit() {
        try {
            const response = await api.post("/clientes", {
                nome,
                cpf,
                email,
                telefone,
                endereco: { id: idEndereco },
                sexo: codigoSexo
            });
            Alert.alert("Endereço salvo com sucesso");
            setNome("");
            setCpf("");
            setEmail("");
            setTelefone("");
            setIdEndereco("");
            setCodigoSexo("");
        } catch (error) {
            Alert.alert("Erro ao realizar a operação, tente novamente mais tarde");
        }
    }
    return (
        <Container>
            <Formulario>
                <Titulo>Cadastro de Cliente</Titulo>
                <Label>Nome: *</Label>
                <FormInput
                    placeholder="Descrição do genero"
                    placeholderTextColor="#999"
                    value={nome}
                    onChangeText={setNome}
                    onChange={carregarCombos} />
                <Label>Cpf: *</Label>
                <FormInput
                    placeholder="CPF"
                    placeholderTextColor="#999"
                    value={cpf}
                    onChangeText={setCpf} />
                <FormInput
                    placeholder="E-mail"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail} />
                <FormInput
                    placeholder="Telefone"
                    placeholderTextColor="#999"
                    value={telefone}
                    onChangeText={setTelefone} />
                <FormInput
                    placeholder="Endereço"
                    placeholderTextColor="#999"
                    value={telefone}
                    onChangeText={setTelefone} />
                <Label>Endereço: *</Label>
                <Picker selectedValue={idEndereco} onValueChange={setIdEndereco}>
                    <Picker.Item label="ENDEREÇO" value="" />
                    {enderecos.map(endereco => {
                        return (
                            <Picker.Item
                                key={endereco.id}
                                label={endereco.rua}
                                value={endereco.id}
                            />
                        );
                    })}
                </Picker>
                <Label>Sexo: *</Label>
                <Picker selectedValue={codigoSexo} onValueChange={setCodigoSexo}>
                    <Picker.Item label="SEXO" value="" />
                    {sexos.map(sexo => {
                        return (
                            <Picker.Item
                                key={sexo.codigo}
                                label={sexo.descricao}
                                value={sexo.codigo}
                            />
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
