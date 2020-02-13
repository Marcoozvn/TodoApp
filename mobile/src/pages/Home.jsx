import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView, SafeAreaView, View, Platform } from 'react-native';
import Api from '../services/Api';
import { getToken } from '../services/Auth';
import TaskCard from '../components/TaskCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';

export default function Home({ navigation }) {
  const [tasks, setTasks] = useState([]);

  async function createTask(newTask) {
    const token = await getToken();
    
    const response = await Api.post('/tasks', newTask, {
      headers: {
        token: token
      }
    }).catch(err => console.log(err));
  
    const task = response.data;
    if (task) {
      setTasks([...tasks, task]);
    }
  }

  async function removeTask(id) {
    const token = await getToken();

    await Api.delete(`/tasks/${id}`, {
      headers: {
        token: token
      }
    }).catch(err => console.log(err));

    setTasks(tasks.filter( task => task._id !== id));
  }
  
  useEffect(() => {
    async function loadTasks() {
      const token = await getToken();

      const response = await Api.get('/tasks', {
        headers: {
          token: token
        }
      }).catch(err => console.log(err));

      if (response) setTasks(response.data);
    }

    loadTasks();

  }, [])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#7159c1'}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TaskForm', {
          onSave: (task) => createTask(task)
        })}>
          <FontAwesome name="plus" color="#7159c1"/>
          <Text style={styles.buttonText}>Adicionar tarefa</Text>
        </TouchableOpacity>
        <ScrollView>
          {tasks.map( task => (
            <TaskCard key={task._id} task={task} onRemove={removeTask}/>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        marginTop: Constants.statusBarHeight + 10
      },
      android: {
        marginTop: Constants.statusBarHeight + 40
      }
    })
  },

  button: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 30,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
          width: 4,
          height: 4,
        },
        elevation: 2
      },
      android: {
        elevation: 15
      }
    })    
  },

  buttonText: {
    color: '#7159c1',
    fontWeight: 'bold',
    marginLeft: 10
  }
})