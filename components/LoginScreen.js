
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const correctUsername = '123';
    const correctPassword = '123';

    if (username === correctUsername && password === correctPassword) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Invalid Credentials', 'Wrong username or password. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login/Signup Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        value={password}
      />
      <Button title="Login" onPress={handleLogin} style={styles.button} />
      <view style = {styles.space}/>
      <Button title="Signup" onPress={() => console.log('Navigate to SignUp')} style={styles.button}/>
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
    margin: 10,
    padding: 10,
    width: 200,
  },
  button:{
    marginVertical: 10
  },
  space:{
    height: 10
  }
});

export default LoginScreen;
