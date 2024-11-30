import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';


export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!username) {
      errors.username = 'Username is required.';
    }
    if (!password) {
      errors.password = 'Password is required.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if(validateForm()){
      console.log('Submitted', username, password);
      setUsername('');
      setPassword('');
      setErrors({});
      Alert.alert('Login Successful', `Welcome, ${username}!`);
    }
  };

   
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login Form </Text>

      <View style={styles.inputWrapper}>
        <View style={styles.container2}>
          <Text style={styles.label}> Username </Text>
          <TextInput
            style={styles.input}
            placeholder = "Enter your username"
            value={username}
            onChangeText={setUsername}
          />
          {errors.username ? <Text style={styles.errorTxt}>{errors.username}</Text> : null}
        </View>
        <View style={styles.container2}>
          <Text style={styles.label}> Password </Text>
          <TextInput
            style={styles.input}
            placeholder = "Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          {errors.password ? <Text style={styles.errorTxt}>{errors.password}</Text> : null}
        </View>
      </View>
      <View style={styles.buttonCon}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.txtbutton}> Submit </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    width: '80%',
    marginBottom: 15,
  },
  container2: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    padding: 5,
    width: '100%',
    fontSize: 13,
    borderRadius: 10,
  },
  buttonCon: {
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'yellowgreen',
    padding: 15,
    width: 170,
    borderRadius: 10,
  },
  txtbutton: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  title: {
    color: 'yellowgreen',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 50,
  },
  errorTxt: {
    color: 'red',
    fontSize: 15,
    marginTop: 5,
  },
});
