import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Modal from "react-native-modal";
import { onSignIn, onSignUp, setToken } from '../services/Auth';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [register, setRegister] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsValid((!register && username !== '' && password !== '') || 
      (register && username !== '' && password !== '' && (password === confirmPassword))
    )
  }, [username, password, confirmPassword, register])

  async function signIn() {
    const token = await onSignIn({username, password}).catch(err => setError('Login/senha incorretos.'));

    if (token) {
      navigation.navigate('Home');
      setToken(token);
    }
  }

  async function signUp(userInfo) {
    const response = await onSignUp(userInfo).catch(err => setError('Erro ao fazer cadastro'));

    if (response) {
      setRegister(false);
    }

    setShowModal(true);
  }


  return (
    <KeyboardAvoidingView 
      style={{flex: 1}}
      behavior={Platform.select({
        ios: 'padding',
        android: null,
      })}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setRegister(!register)}>
            <Text style={register ? styles.headerLabel : {...styles.headerLabel, opacity: 1}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRegister(!register)}>
            <Text style={!register ? styles.headerLabel : {...styles.headerLabel, opacity: 1}}>Cadastro</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.form}>
            <View style={styles.formField}>
              <FontAwesome name="user-o" size={25} color='#7159c1'/>
              <TextInput
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
                style={styles.formInput}
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="off"
              />
            </View>
            <View style={styles.formField}>
              <FontAwesome name="lock" size={33} color='#7159c1'/>
              <TextInput
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.formInput}
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="off"
              />
            </View>

            { register ? 
            <View style={styles.formField}>
              <FontAwesome name="lock" size={33} color='#7159c1'/>
              <TextInput
                placeholder="Confirme a senha"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                style={styles.formInput}
              />
            </View>
            : <></>}
          </View>
          { register ? 
          <TouchableOpacity style={styles.button} onPress={() => signUp({ username, password })} disabled={!isValid}>
            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Cadastrar</Text>
          </TouchableOpacity> : 
          <TouchableOpacity style={styles.button} onPress={() => signIn({ username, password, confirmPassword })} disabled={!isValid}>
            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>}
          
        </View>
        <Modal isVisible={showModal} style={styles.modal} onBackdropPress={() => setShowModal(false)}>
          <View style={styles.modalCard}>
            {error ? <MaterialIcons name="error" color="red" size={20}/> : <Ionicons name="md-checkmark" color="green" size={20}/>}
            <Text style={styles.modalText}>{error ? error : 'Usuário criado'}</Text>
          </View>
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7159c1'
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  headerLabel: {
    color: '#fff', 
    fontSize: 20, 
    marginBottom: 20,
    opacity: 0.5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2
  },

  card: {
    width: 250,
    height: 250,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2
  },

  form: {
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },

  formField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },

  formInput: {
    width: '100%',
    marginLeft: 5,
    padding: 10,
    borderLeftColor: '#7159c1',
    borderLeftWidth: 1,
  },

  button: {
    backgroundColor: '#7159c1',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10
  },

  modal: {
    flex: 1,
    alignItems: 'center'
  },

  modalCard: {
    width: 200,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalText: {
    marginTop: 10,
    color: '#666',
    fontWeight: 'bold'
  }
})