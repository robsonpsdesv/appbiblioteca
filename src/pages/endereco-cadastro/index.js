import React, { useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import api from '../../services/api';

import {
    Container,
    Formulario,
    Titulo, Label, FormInput, SubmitButton, ButtonLabel
} from './styles'

export default function GeneroCad() {
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [quadra, setQuadra] = useState("");
    const [lote, setLote] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [pais, setPais] = useState("");

    async function handleSubmit() {
        try {
            const response = await api.post("/enderecos", {
                rua,
                bairro,
                quadra,
                lote,
                numero,
                complemento,
                cidade,
                estado,
                pais
            });
            Alert.alert("Endereço salvo com sucesso");
            setRua("");
            setBairro("");
            setQuadra("");
            setLote("");
            setNumero("");
            setComplemento("");
            setCidade("");
            setEstado("");
            setPais("");
        } catch (error) {
            Alert.alert("Erro ao realizar a operação, tente novamente mais tarde");
        }
    }
    return (
        <ScrollView>
            <Container>
                <Formulario>
                    <Titulo>Cadastro de Genero</Titulo>
                    <Label>Rua: *</Label>
                    <FormInput
                        placeholder="Endereços"
                        placeholderTextColor="#999"
                        value={rua}
                        onChangeText={setRua} />
                    <Label>Bairro: *</Label>
                    <FormInput
                        placeholder="Bairro"
                        placeholderTextColor="#999"
                        value={bairro}
                        onChangeText={setBairro} />
                    <Label>Quadra: *</Label>
                    <FormInput
                        placeholder="Quadra"
                        placeholderTextColor="#999"
                        value={quadra}
                        onChangeText={setQuadra} />
                    <Label>Lote: *</Label>
                    <FormInput
                        placeholder="Lote"
                        placeholderTextColor="#999"
                        value={lote}
                        onChangeText={setLote} />
                    <Label>Numero: *</Label>
                    <FormInput
                        placeholder="Numero"
                        placeholderTextColor="#999"
                        value={lote}
                        onChangeText={setLote} />
                    <Label>Complemento: *</Label>
                    <FormInput
                        placeholder="Complemento"
                        placeholderTextColor="#999"
                        value={complemento}
                        onChangeText={setComplemento} />
                    <Label>Cidade: *</Label>
                    <FormInput
                        placeholder="Cidade"
                        placeholderTextColor="#999"
                        value={cidade}
                        onChangeText={setCidade} />
                    <Label>Estado: *</Label>
                    <FormInput
                        placeholder="Estado"
                        placeholderTextColor="#999"
                        value={estado}
                        onChangeText={setEstado} />
                    <Label>Pais: *</Label>
                    <FormInput
                        placeholder="Pais"
                        placeholderTextColor="#999"
                        value={pais}
                        onChangeText={setPais} />
                    <SubmitButton onPress={handleSubmit}>
                        <ButtonLabel>Salvar</ButtonLabel>
                    </SubmitButton>
                </Formulario>
            </Container>
        </ScrollView>
    );
}
