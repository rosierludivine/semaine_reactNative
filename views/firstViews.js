import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

function homeViews({navigation}) {
  
  const [enteredTask, setEnteredTask] = useState([]);

  const addNote = (note) => {
    if (note == null)return;
    setEnteredTask ([...enteredTask, enteredTask])
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerFlexTitle}>
        <Text style={styles.headerTitle}> My Notes </Text>
      </View>

      <View style={styles.containerFlexCorps}>

        <View style={styles.flexNote}>

            {/* cette view va etre la note  */}
            <Text style={styles.textBox} onPress={() => {navigation.navigate('firstViews')}} title='Go to second page'>Mes notes </Text>
        </View>
            {/* Créer un lien vers une nouvelle page  */}



        {/* ajout d'une notes */}
        <TextInput style={styles.inputTextNom} label="Nouvelle note"   mode='outlined' value={enteredTask} onChangeText={(value) => setEnteredTask(value)}/>
        <IconButton   icon="plus-circle" iconColor='#E4BE9E' size={70} onPress={addNote} title='Ajouter une note ' />
      
      </View>
      <View style={styles.containerFlexFooter}>
        <Text>Pas le droit de copier, Ludivine Rosier </Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputTextNom: {
      width: '80%',
      margin: '5%',
      borderBottomColor: '#B6E2CB',
  
    },
    containerFlexTitle: {
      width:'100%',
      flex: 0,
      padding:'3%',
      backgroundColor:'#B6E2CB',
      textAlign: 'center', 
    },
    containerFlexCorps: {
      width:'100%',
      flex: 5,
      alignItems:'center',
      backgroundColor: '#fff',
    },
    containerFlexFooter: {
      width:'100%',
      flex: 0,
      padding:'3%',
      backgroundColor: '#B6E2CB',
    },
    buttonChangeVue: {
      width:'60%',
      flex: 'end',
    }, 
    headerTitle: {
        textAlign: 'center',
        fontSize: 24 
    },
    flexNote: {
        margin: '5%',
        padding: '3%',
        width: '80%',
        backgroundColor: '#EEDFD2',
        borderRadius: 8,
    },
    textBox: {
        fontSize:20
    }, 
    addNotes: {
        backgroundColor: '#E4BE9E',
        padding:'10%',
        borderRadius: 100,
        
    }
  });
export default homeViews ;