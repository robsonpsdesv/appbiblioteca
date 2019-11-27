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
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [volume, setVolume] = useState("");
    const [dataPublicacao, SetDataPublicacao] = useState("");
    const [idGenero, setIdGenero] = useState("");
    const [generos, setGeneros] = useState([]);
    const [idEditora, setIdEditora] = useState("");
    const [editoras, setEditoras] = useState([]);
    const [idAutor, setIdAutor] = useState("");
    const [autores, setAutores] = useState([]);

    function carregarCombos() {
        async function carregarGeneros() {
            const response = await api.get("/generos");
            setGeneros(response.data);
        }
        carregarGeneros();
        async function carregarEditoras() {
            const response = await api.get("/editoras");
            setEditoras(response.data);
        }
        carregarEditoras();
        async function carregarAutores() {
            const response = await api.get("/autores");
            setAutores(response.data);
        }
        carregarAutores();
    }

    async function handleSubmit() {
        try {
            if (idGenero === "") {
                Alert.alert("Selecione um genero");
            } else if (idEditora === "") {
                Alert.alert("Selecione uma editora");
            } else if (idAutor === "") {
                Alert.alert("Selecione um autor");
            } else {
                const response = await api.post("/livros", {
                    nome,
                    valor,
                    volume,
                    dataPublicacao,
                    genero: { id: idGenero },
                    editora: { id: idEditora },
                    autor: { id: idAutor }
                });

                Alert.alert("Livro salvo com sucesso");
                setNome("");
                setValor("");
                setVolume("");
                SetDataPublicacao("");
                setIdGenero("");
                setIdEditora("");
                setIdAutor("");
            }
        } catch (error) {
            console.log(response);
            Alert.alert("Erro ao realizar a operação, tente novamente mais tarde");
        }
    }
    return (
        <Container>
            <Formulario>
                <Titulo>Cadastro de Livro</Titulo>
                <Label>Nome: *</Label>
                <FormInput
                    placeholder="Nome do genero"
                    placeholderTextColor="#999"
                    value={nome}
                    onChangeText={setNome}
                    onChange={carregarCombos} />
                <Label>Valor: *</Label>
                <FormInput
                    placeholder="Valor do livro"
                    placeholderTextColor="#999"
                    value={valor}
                    onChangeText={setValor}
                    keyboardType={"decimal-pad"}
                />
                <Label>Volume: *</Label>
                <FormInput
                    placeholder="Volume do livro"
                    placeholderTextColor="#999"
                    value={volume}
                    onChangeText={setVolume}
                    keyboardType={"numeric"}
                />
                <Label>Data da publicação: *</Label>
                <FormInput
                    placeholder="Data da publicação"
                    format="YYYY-MM-DD"
                    placeholderTextColor="#999"
                    value={dataPublicacao}
                    onChangeText={SetDataPublicacao}
                    keyboardType={"numeric"}
                />
                <Label>Sexo: *</Label>
                <Picker selectedValue={idGenero} onValueChange={setIdGenero}>
                    <Picker.Item label="GENERO" value="" />
                    {generos.map(genero => {
                        return (
                            <Picker.Item
                                key={genero.id}
                                label={genero.descricao}
                                value={genero.id}
                            />
                        );
                    })}
                </Picker>
                <Label>Editora: *</Label>
                <Picker selectedValue={idEditora} onValueChange={setIdEditora}>
                    <Picker.Item label="EDITORA" value="" />
                    {editoras.map(editora => {
                        return (
                            <Picker.Item
                                key={editora.id}
                                label={editora.nome}
                                value={editora.id}
                            />
                        );
                    })}
                </Picker>
                <Label>Autor: *</Label>
                <Picker selectedValue={idAutor} onValueChange={setIdAutor}>
                    <Picker.Item label="AUTOR" value="" />
                    {autores.map(autor => {
                        return (
                            <Picker.Item key={autor.id} label={autor.nome} value={autor.id} />
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
