import { NavigationProp } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

interface LandingProps {
  navigation: NavigationProp<any>;
}

const CreateAccountName = ({navigation}: LandingProps) => {
  return (
    <View style={{ backgroundColor: 'white', height: '100%', width: '100%', padding: 20 }}>
        <Text style={{fontSize: 30}}>What's your name?</Text>
        <Text>Enter the name you use in real life.</Text>

        <View style={{marginTop: 40, display: 'flex', flexDirection: 'column', gap: 10}}>
            <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                <TextInput placeholder='First Name' style={styles.textInput}></TextInput>
                <TextInput placeholder='Last Name' style={styles.textInput}></TextInput>
            </View>
            <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 20 }} 
            onPress={() => { navigation.navigate('Create account dob') }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Next</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    height: 50,
    width: '48%'
  }
});

export default CreateAccountName