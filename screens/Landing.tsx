import React, { useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface LandingProps {
  navigation: NavigationProp<any>;
}

const Landing = ({ navigation }: LandingProps) => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Connectify</Text>
        </View>
        <View style={styles.form}>
          <TextInput placeholder='email' style={styles.textInput} />
          <TextInput placeholder='password' style={styles.textInput} secureTextEntry />
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      {!keyboardVisible && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('Create account name')}>
            <Text style={styles.createAccountButtonText}>Create new account</Text>
          </TouchableOpacity>
        </View>
      )}
      <Text style={styles.footerText}>TrickLabs</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    width: '90%',
    justifyContent: 'flex-start',
    marginTop: 100
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'blue',
  },
  form: {
    justifyContent: 'center',
    gap: 20,
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    height: 50,
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  forgotPassword: {
    textAlign: 'center',
    color: 'black',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    position: 'absolute',
    bottom: 50,
  },
  createAccountButton: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'blue',
  },
  createAccountButtonText: {
    color: 'blue',
    textAlign: 'center',
  },
  footerText: {
    position: 'absolute',
    bottom: 10,
    color: 'grey',
  },
});

export default Landing;
