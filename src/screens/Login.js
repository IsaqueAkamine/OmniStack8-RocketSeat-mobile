import React from 'react';
import { KeyboardAvoidingView, Image, View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import logo from '../assets/logo.png';

export default function screens() {
    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS === "ios"}
            style={styles.container}
        >
            <Image source={logo} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite seu usuário no Github"
                placeholderTextColor="#999"
                style={styles.textinput}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    textinput: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
})