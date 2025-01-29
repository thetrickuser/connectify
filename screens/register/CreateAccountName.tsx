import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface LandingProps {
  navigation: NavigationProp<any>;
}

const CreateAccountName = ({ navigation }: LandingProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your name?</Text>
      <Text style={styles.subtitle}>Enter the name you use in real life.</Text>

      <View style={styles.inputContainer}>
        <View style={styles.nameRow}>
          <TextInput placeholder='First Name' style={styles.textInput}></TextInput>
          <TextInput placeholder='Last Name' style={styles.textInput}></TextInput>
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={() => { navigation.navigate('Create account dob') }}>
          <Text style={styles.nextButtonText}>Next</Text>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'column',
    gap: 10,
  },
  nameRow: {
    flexDirection: 'row',
    gap: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    height: 50,
    flex: 1,
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

export default CreateAccountName;
