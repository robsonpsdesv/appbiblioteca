import React, { useState } from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';

import api from '../../services/api';

export default function LivroList() {

    const [livros, setLivros] = useState([]);

    async function carregarLivros() {
        const response = await api.get('/livros');
        setLivros(response.data);
    }

    carregarLivros();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Livros</Text>
            <FlatList data={livros}
                style={styles.lista}
                keyExtractor={genero => `${genero.id}`}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <View style={styles.card}>
                            <Text style={styles.label} >Id: {item.id}</Text>
                            <Text style={styles.label}>Descrição: {item.descricao}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: '#0000FF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    lista: {
        paddingHorizontal: 20
    },
    titulo: {
        fontSize: 18,
        marginTop: 30,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    label: {
        fontWeight: 'bold',
        color: '#444'
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 10
    }
});