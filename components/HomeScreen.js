import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import StudentInfo from './StudentInfo';

const HomeScreen = ({ navigation }) => {
  const [students, setStudents] = useState([]);

  const handleNavigateToRestaurantLink = () => {
    navigation.navigate('RestaurantLink');
  };

  const handleNavigationToAddRestaurant = () => {
    navigation.navigate('AddRestaurant');
  };

  const handleAddStudent = (newStudents) => {
    setStudents(newStudents);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Restaurant List"
        onPress={handleNavigateToRestaurantLink}
        style={styles.button}
      />
      <View style={styles.space} />
      <Button
        title="Add Restaurant"
        onPress={handleNavigationToAddRestaurant}
        style={styles.button}
      />
      <View style={styles.space} />
        <Button
          title="StudentInfo"
          onPress={() =>
            navigation.navigate('StudentInfo', {
              onAddStudent: handleAddStudent,
            })
          }
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
  },
  space: {
    height: 10,
  },
});

export default HomeScreen;
