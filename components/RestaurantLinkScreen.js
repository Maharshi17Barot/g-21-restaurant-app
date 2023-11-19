import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RestaurantLinkScreen = () => {
  const navigation = useNavigation();

  const [restaurants, setRestaurants] = useState([
    { id: '1', name: 'Restaurant A', tags: ['Mexican'], rating: 3 },
    { id: '2', name: 'Restaurant B', tags: ['American'], rating: 4 },
    { id: '3', name: 'Restaurant C', tags: ['Japanese'], rating: 5 },
  ]);

  const [ratingModalVisible, setRatingModalVisible] = useState(false);
  const [modalRestaurant, setModalRestaurant] = useState(null);
  const [newRating, setNewRating] = useState(0);

  const renderRestaurantItem = ({ item }) => (
    <View style={styles.restaurantItem}>
      <Text>{item.name}</Text>
      <Text>Tags: {item.tags.join(', ')}</Text>
      <Text>Rating: {item.rating}/5</Text>
      <View style={styles.space} />
      <Button
        title="Rate"
        onPress={() => handleRateRestaurant(item)}
        style={styles.button}
      />
      <View style={styles.space} />
      <Button
        title="Show Map"
        onPress={() => handleShowMap(item)}
        style={styles.button}
      />
      <View style={styles.space} />
      <Button
        title="Get Directions"
        onPress={() => handleGetDirections(item)}
        style={styles.button}
      />
    </View>
  );

  const handleRateRestaurant = (restaurant) => {
    setRatingModalVisible(true);
    setModalRestaurant(restaurant);
  };

  const handleShowMap = (restaurant) => {
    console.log('Show map for restaurant:', restaurant);
  };

  const handleGetDirections = (restaurant) => {
    console.log('Get directions to restaurant:', restaurant);
  };

  const handleRatingSubmit = () => {
    if (newRating >= 0 && newRating <= 5) {
      const updatedRestaurants = restaurants.map((r) =>
        r.id === modalRestaurant.id ? { ...r, rating: newRating } : r
      );

      setRestaurants(updatedRestaurants);
      setRatingModalVisible(false);
    } else {
      Alert.alert('Invalid Rating', 'Please enter a rating between 1 and 5.');
    }
  };

  const handleModalClose = () => {
    setRatingModalVisible(false);
  };

  const handleAddRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
  };

  const handleBackToHome = () => {
    navigation.goBack();
  };

  const handleNavigateToAddRestaurant = () => {
    navigation.navigate('AddRestaurant', {
      onAddRestaurant: handleAddRestaurant,
    });
  };

  return (
    <View style={styles.container}>
      <Text>Restaurant Link Screen</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={renderRestaurantItem}
      />
      <Modal visible={ratingModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Rate {modalRestaurant?.name}</Text>
            <TextInput
              placeholder="Enter your rating (1-5)"
              keyboardType="numeric"
              value={newRating.toString()}
              onChangeText={(text) => setNewRating(parseInt(text))}
              style={styles.input}
            />
            <Button title="Submit" onPress={handleRatingSubmit} />
            <Button title="Cancel" onPress={handleModalClose} />
          </View>
        </View>
      </Modal>
      <View style={styles.navigationBar}>
        <Button title="Back" onPress={handleBackToHome} />
        <View style={styles.space} />
        <Button
          title="Add Restaurant"
          onPress={handleNavigateToAddRestaurant}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  restaurantItem: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    marginVertical: 10,
  },
  space: {
    height: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
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

export default RestaurantLinkScreen;
