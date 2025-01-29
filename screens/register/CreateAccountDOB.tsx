import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
  const [selectedDay, setSelectedDay] = useState(date.getDate());
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>What's your birthday?</Text>
        <Text style={styles.headerSubtitle}>Choose your date of birth.</Text>
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
            <Text style={styles.modalTitle}>Select Date</Text>
            <View style={styles.datePickerView}>
              <FlatList
                data={Array.from({ length: 31 }, (_, i) => i + 1)}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => setSelectedDay(item)}>
                    <Text style={selectedDay === item ? styles.selectedOption : styles.option}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <FlatList
                data={Array.from({ length: 12 }, (_, i) => i + 1)}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => setSelectedMonth(item)}>
                    <Text style={selectedMonth === item ? styles.selectedOption : styles.option}>{months.get(item)}</Text>
                  </TouchableOpacity>
                )}
              />
              <FlatList
                data={Array.from({ length: 100 }, (_, i) => date.getFullYear() - i)}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => setSelectedYear(item)}>
                    <Text style={selectedYear === item ? styles.selectedOption : styles.option}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View style={styles.modalFooter}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButton}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                handleDateChange(selectedDay, selectedMonth, selectedYear);
                setModalVisible(false);
              }}>
                <Text style={styles.okButton}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.nextButton} onPress={() => { navigation.navigate('Create account gender') }}>
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
  header: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
  },
  headerSubtitle: {
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    height: 50,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  datePickerView: {
    flexDirection: 'row',
    marginTop: 20,
    padding: 10,
    height: '50%',
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    padding: 20,
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
  cancelButton: {
    fontSize: 20,
    color: 'black',
    marginRight: 20,
  },
  okButton: {
    fontSize: 20,
    color: 'blue',
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

export default CreateAccountDOB;
