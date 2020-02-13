import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import { AntDesign } from '@expo/vector-icons';

export default function TaskCard({ task, onRemove }) {
  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState('#fff');

  useEffect(() => {
    if (task.status === 'Pendente') setColor('#fb8d62');

    if (task.status === 'Concluída') setColor('#61d4b3');

    if (task.status === 'Fazendo') setColor('#fdd365');
  }, [])

  return (
    <>
      <TouchableOpacity 
        onPress={() => setShowModal(true)}
        style={styles(color).card}
        >
        <Text style={styles(color).text}>{task.title}</Text>
        <TouchableOpacity hitSlop={{ top: 30, right: 30, bottom: 30, left: 30 }} onPress={() => onRemove(task._id)}>
          <AntDesign name="delete" color='#fff' size={16}/>
        </TouchableOpacity>
      </TouchableOpacity>
      <Modal isVisible={showModal} style={styles(color).modal} onBackdropPress={() => setShowModal(false)}>
        <View style={styles(color).modalCard}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles(color).text}>Título: </Text>
            <Text style={styles(color).modalText}>{task.title}</Text>
          </View>
          <View style={{flexDirection: 'row', overflow: "scroll"}}>
            <Text style={styles(color).text}>Descrição: </Text>
            <Text style={styles(color).modalText}>{task.description}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles(color).text}>Status: </Text>
            <Text style={styles(color).modalText}>{task.status}</Text>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = (color) => StyleSheet.create({

  card: {
    width: 300,
    margin: 10,
    borderRadius: 5,
    padding: 15,
    backgroundColor: color,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  text: {
    color: '#fff',
    fontWeight: 'bold'
  },

  modal: {
    flex: 1,
    alignItems: 'center'
  },

  modalCard: {
    width: '100%',
    borderRadius: 4,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },

  modalText: {
    color: '#fff'
  }

})