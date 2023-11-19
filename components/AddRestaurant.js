
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const AddRestaurant = ({ navigation, onAddRestaurant }) => {
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantTags, setRestaurantTags] = useState('');

  const handleAddRestaurant = () => {
    if (!restaurantName || !restaurantTags) {
      alert('Please enter restaurant name and tags.');
      return;
    }
    const tagsArray = restaurantTags.split(',').map((tag) => tag.trim());
    const newRestaurant = {
      id: (restaurants.length + 1).toString(),
      name: restaurantName,
      tags: tagsArray,
      rating: 0,
    };

    onAddRestaurant(newRestaurant);

    navigation.goBack();
  };

  const handleBackToHome = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Add Restaurant</Text>
      <TextInput
        style={styles.input}
        placeholder="Restaurant Name"
        value={restaurantName}
        onChangeText={(text) => setRestaurantName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Restaurant Tags (comma-separated)"
        value={restaurantTags}
        onChangeText={(text) => setRestaurantTags(text)}
      />
      <Button title="Add Restaurant" onPress={handleAddRestaurant} />
      <View style={styles.space}/>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    width: 200,
  },
  gap: {
    marginVertical: 10,
  },
  space: {
    height: 10,
  },
});

export default AddRestaurant;
