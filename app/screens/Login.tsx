import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { StackNavigationProp } from '@react-navigation/stack';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './types';

const Login = () => {
    type NavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;
    type NavigationProps2 = StackNavigationProp<RootStackParamList, 'Signup'>;
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const navigation = useNavigation<NavigationProps>();
    const navigation2 = useNavigation<NavigationProps2>();


    function handleSignUpButton(){
        navigation2.navigate("Signup");
    }

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate("Home");
        }
        catch (error: any) {
            console.log(error);
            alert("Sign in failed: " + error.message);
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
                            <TouchableOpacity style={styles.button} onPress={signIn}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>

                            
                        </>
                    )
                }

                <Text style={styles.text1}>Don't have an account? <Text style={styles.text2} onPress={handleSignUpButton}>Sign Up</Text></Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login;

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
    text1:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    text2:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff8c00',
        marginBottom: 20,
        textAlign: 'center',
    }
})
