import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const StudentInfo = ({ navigation, route }) => {
  const { onAddStudent } = route.params; // Destructuring onAddStudent from route.params

  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Hardcoded student information
    const student1 = {
      name: 'Maharshi N Barot',
      studentId: '101380593',
    };
    const student2 = {
      name: 'Kushal Patel ',
      studentId: '101378751',
    };
    const student3 = {
      name: 'Vedant Sinh Gohel ',
      studentId: '101398199 ',
    };
    const student4 = {
      name: 'Meha Modi',
      studentId: '101371431',
    };

    const studentData = [student1, student2, student3, student4];
    setStudents(studentData);

    onAddStudent(studentData);
  }, [onAddStudent]);

  const handleBackToHome = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Student Information</Text>
      <View style={styles.space}/>
      <FlatList
        data={students}
        keyExtractor={(item) => item.studentId}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Student ID: {item.studentId}</Text>
            <View style={styles.space} />
          </View>
        )}
      />
      <Button title="Back" onPress={handleBackToHome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  space: {
    height: 10,
  },
});

export default StudentInfo;
