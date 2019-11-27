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

export default function AutorCad() {
    const [nome, setNome] = useState("")
    const [sexo, setSexo] = useState([])
    const [codigoSexo, setCodigoSexo] = useState("")

    async function listarSexo() {
        const response = await api.get("/autores/sexo");

        setSexo(response.data)
    }
    listarSexo()

    async function handleSubmit() {
        try {
            if (codigoSexo === "") {
                Alert.alert("Selecione o sexo")
            } else {
                const response = await api.post("/autores", {
                    nome,
                    sexo: codigoSexo
                })

                Alert.alert("Autor salvo com sucesso!")
                setNome("")
                setCodigoSexo("")
            }
        } catch (error) {
            Alert.alert('Erro ao realizar a operação, tente novamente mais tarde!');
            console.log(error.message);
            throw error;
        }
    }
    return (
        <Container>
            <Formulario>
                <Titulo>Cadastro de Autor</Titulo>
                <Label>Nome: *</Label>
                <FormInput
                    placeholder="Descrição do genero"
                    placeholderTextColor="#999"
                    value={nome}
                    onChangeText={setNome} />
                <Label>Sexo: *</Label>
                <Picker
                    selectedValue={codigoSexo}
                    onValueChange={setCodigoSexo}
                >
                    <Picker.Item
                        key={sexo.codigo}
                        labe={sexo.descricao}
                        value={sexo.codigo}
                    />
                </Picker>
                <SubmitButton onPress={handleSubmit}>
                    <ButtonLabel>Salvar</ButtonLabel>
                </SubmitButton>
            </Formulario>
        </Container>
    );
}
