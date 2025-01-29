import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface LandingProps {
    navigation: NavigationProp<any>;
}

const CreateAccountPassword = ({ navigation }: LandingProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create a new password</Text>

            <View style={styles.inputContainer}>
                <TextInput placeholder='Password' style={styles.textInput} />
                <TextInput placeholder='Confirm Password' style={styles.textInput} />
                <TouchableOpacity style={styles.nextButton} onPress={() => { navigation.navigate('Create account dob') }}>
                    <Text style={styles.nextButtonText}>Create my account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
    },
    inputContainer: {
        marginTop: 40,
        flexDirection: 'column',
        gap: 10,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
        padding: 10,
        height: 50,
        width: '100%',
    },
    nextButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    nextButtonText: {
        color: 'white',
    },
});

export default CreateAccountPassword;
