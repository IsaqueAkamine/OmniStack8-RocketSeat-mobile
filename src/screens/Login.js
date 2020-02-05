import React, { useState } from 'react';
import { KeyboardAvoidingView, Image, View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import logo from '../assets/logo.png';

export default function Login({ navigation }) {
    const [user, setUser] = useState('');

    function handleLogin() {
        console.log(user);
        navigation.navigate('Main');
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS === "ios"}
            style={styles.container}
        >
            {/* <View style={styles.content}> */}
            <Image source={logo} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite seu usuário no Github"
                placeholderTextColor="#999"
                style={styles.textinput}
                value={user}
                onChangeText={setUser}
            />
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttontext}>Enviar</Text>
            </TouchableOpacity>
            {/* </View> */}
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
    //ALTERAR DEPOIS PARA WEB
    // content: {
    //     backgroundColor: '#ded',
    //     width: 300,
    //     maxWidth: Platform.OS === 'web' && 600
    // },
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