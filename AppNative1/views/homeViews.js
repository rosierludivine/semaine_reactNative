import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function homeViews({navigation}) {

   

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
        
        <View style={styles.addNotes}>

        </View>

        {/* ajout d'une notes */}
        

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

      textAlign: 'center', 
      alignItems: 'center'
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