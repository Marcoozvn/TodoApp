import React, { useState } from 'react';
import { Text, StyleSheet, Picker, SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function TaskForm({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pendente');

  function onChangeStatus(status) {
    setStatus(status);
  }

  function onSave() {
    if (title !== '' && description != '' && status !== '') {
      navigation.state.params.onSave({title, description, status});
      navigation.goBack();
    }
  }

  return (
    <KeyboardAwareScrollView 
    style={{flex: 1, backgroundColor: '#7159c1'}}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Título</Text>
          <TextInput
            style={styles.formField}
            placeholder="Título da tarefa"
            value={title}
            onChangeText={setTitle}
          />
          <Text style={styles.inputLabel}>Descrição</Text>
          <TextInput
            style={styles.formField}
            placeholder="Descrição da tarefa"
            value={description}
            onChangeText={setDescription}
          />
          <Text style={styles.inputLabel}>Status</Text>
          <Picker selectedValue={status} onValueChange={onChangeStatus} mode='dropdown' itemStyle={styles.picker}>
            <Picker.Item label="Concluída" value="Concluída" />
            <Picker.Item label="Fazendo" value="Fazendo" />
            <Picker.Item label="Pendente" value="Pendente" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.button} onPress={onSave}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight + 10
  },

  form: {
    width: '50%'
  },

  formField: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    width: '100%',
    marginVertical: 10,
    textAlign: 'center'
  },

  inputLabel: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },

  picker: {
    color: '#fff',
    fontSize: 16
  },

  button: {
    backgroundColor: '#61d4b3',
    width: '50%',
    padding: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  }
})