import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react'
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

interface LandingProps {
  navigation: NavigationProp<any>;
}

const months: Map<number, string> = new Map([
  [1, 'Jan'],
  [2, 'Feb'],
  [3, 'Mar'],
  [4, 'Apr'],
  [5, 'May'],
  [6, 'Jun'],
  [7, 'Jul'],
  [8, 'Aug'],
  [9, 'Sep'],
  [10, 'Oct'],
  [11, 'Nov'],
  [12, 'Dec']
]);

const CreateAccountDOB = ({ navigation }: LandingProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const date = new Date();
  const [selectedDay, setSelectedDay] = useState(date.getDay() + 1);
  const [selectedMonth, setSelectedMonth] = useState(date.getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(date.getFullYear());
  const [age, setAge] = useState('');

  const calculateAge = (birthDate: Date) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleDateChange = (day: number, month: number, year: number) => {
    const date = new Date(year, month - 1, day);
    setSelectedDate(date.toDateString());
    setAge(calculateAge(date).toString());
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 20, gap: 20 }}>
      <View>
        <Text style={{ fontSize: 30 }}>What's your birthday?</Text>
        <Text>Choose your date of birth.</Text>
      </View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.textInput}>{selectedDate ? `${selectedDate} (Age: ${age})` : 'Select Date'}</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Select Date</Text>
            {/* Day Picker */}
            <View style={styles.datePickerView}>
              <ScrollView>
                {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                  <TouchableOpacity key={day} onPress={() => setSelectedDay(day)}>
                    <Text style={selectedDay === day ? styles.selectedOption : styles.option}>{day}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              {/* Month Picker */}
              <ScrollView>
                {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                  <TouchableOpacity key={month} onPress={() => setSelectedMonth(month)}>
                    <Text style={selectedMonth === month ? styles.selectedOption : styles.option}>{months.get(month)}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              {/* Year Picker */}
              <ScrollView>
                {Array.from({ length: 100 }, (_, i) => date.getFullYear() - i).map(year => (
                  <TouchableOpacity key={year} onPress={() => setSelectedYear(year)}>
                    <Text style={selectedYear === year ? styles.selectedOption : styles.option}>{year}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'flex-end', gap: 30, alignItems: 'center', height: '20%' }}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ fontSize: 20 }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                handleDateChange(selectedDay, selectedMonth, selectedYear);
                setModalVisible(false);
              }}>
                <Text style={{ fontSize: 20 }}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 20 }}
        onPress={() => { navigation.navigate('Create account gender') }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Next</Text>
      </TouchableOpacity>
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
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    display: 'flex',
    flexDirection: 'column',
    // marginTop: 200,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '50%'
  },
  datePickerView: {
    display: 'flex',
    flexDirection: 'row',
    height: '80%',
    marginTop: 20,
    padding: 10,
  },
  option: {
    padding: 10,
    fontSize: 18
  },
  selectedOption: {
    padding: 10,
    fontSize: 18,
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey'
  }
});

export default CreateAccountDOB