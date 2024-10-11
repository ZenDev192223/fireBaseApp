import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            alert("Check your email for confirmation.");
        }
        catch (error: any) {
            console.log(error);
            alert("Sign up failed: " + error.message);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Welcome</Text>

                <TextInput 
                    value={email} 
                    style={styles.input} 
                    placeholder='Email' 
                    autoCapitalize='none' 
                    placeholderTextColor="#aaa"
                    onChangeText={(text) => setEmail(text)} 
                />

                <TextInput 
                    secureTextEntry={true} 
                    value={password} 
                    style={styles.input} 
                    placeholder='Password' 
                    autoCapitalize='none' 
                    placeholderTextColor="#aaa"
                    onChangeText={(text) => setPassword(text)} 
                />

                {
                    loading ? (
                        <ActivityIndicator size="large" color="#007bff" />
                    ) : (
                        <>
                            

                            <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={signUp}>
                                <Text style={styles.buttonText}>Create Account</Text>
                            </TouchableOpacity>
                        </>
                    )
                }
            </View>
        </KeyboardAvoidingView>
    )
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: 20,
    },
    innerContainer: {
        width: '100%',
        maxWidth: 400,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#f1f1f1',
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#ff8c00',
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 10,
    },
    buttonSecondary: {
        backgroundColor: '#edb90e',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
})
