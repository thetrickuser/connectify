import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface LandingProps {
  navigation: NavigationProp<any>;
}

interface RadioButtonProps {
  selected: boolean;
  onPress: () => void;
  children: React.ReactNode;
}

const RadioButton = ({ selected, onPress, children }: RadioButtonProps) => {
  return (
    <Pressable onPress={onPress} style={selected ? styles.selectedOption : styles.option}>
      <View style={styles.radioButtonContainer}>
        <Text>{children}</Text>
        {selected && <Text>✔</Text>}
      </View>
    </Pressable>
  );
}

const CreateAccountGender = ({ navigation }: LandingProps) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your gender?</Text>
      <View style={styles.radioContainer}>
        <RadioButton selected={selectedGender === 'Male'} onPress={() => setSelectedGender('Male')}>
          Male
        </RadioButton>
        <RadioButton selected={selectedGender === 'Female'} onPress={() => setSelectedGender('Female')}>
          Female
        </RadioButton>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={() => { navigation.navigate('Create account email') }}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 30,
  },
  radioContainer: {
    flexDirection: 'column',
    gap: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
  },
  option: {
    padding: 10,
    fontSize: 18,
  },
  selectedOption: {
    padding: 10,
    fontSize: 18,
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default CreateAccountGender;
