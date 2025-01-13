import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { NavigationProp } from '@react-navigation/native';

interface LandingProps {
  navigation: NavigationProp<any>;
}

const Landing = ({ navigation }: LandingProps) => {
  return (
    <View style={{
      height: '100%', width: '100%', alignItems: 'center', backgroundColor: 'white'
    }}>
      <View style={{ width: '90%', gap: 30, marginTop: 100 }}>
        <View style={{ height: '10%' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, color: 'blue' }}>Connectify</Text>
          </View>
        </View>
        <View style={{ gap: 20, padding: 20 }}>
          <TextInput placeholder='email' style={styles.textInput}></TextInput>
          <TextInput placeholder='password' style={styles.textInput}></TextInput>
          <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 20 }} 
          onPress={() => { navigation.navigate('Profile') }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ textAlign: 'center', color: 'black' }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', width: '90%', position: 'absolute', bottom: 50 }}>
        <TouchableOpacity style={{ width: '90%', padding: 10, borderWidth: 1, borderRadius: 20, borderColor: 'blue' }} 
        onPress={() => { navigation.navigate('Create account name') }}>
          <Text style={{ color: 'blue', textAlign: 'center' }}>Create new account</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ position: 'absolute', bottom: 10, color: 'grey' }}>TrickLabs</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    height: 50
  }
});

export default Landing