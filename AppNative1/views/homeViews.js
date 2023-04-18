import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

function homeViews({navigation}) {

   

  return (
    
    <View style={styles.container}>
      <View style={styles.containerFlexTitle}>
        <Text style={styles.headerTitle}> My Notes </Text>
      </View>

      <View style={styles.containerFlexCorps}>
        <Text>CORPS </Text>
        {/* creation d'un bouton pour changement de vue  */}
        <View style={styles.flexNote}>
            {/* cette view va etre la note  */}
            <Text style={styles.headerTitle}>Ma note</Text>

            {/* Créer un lien vers une nouvelle page  */}
            <Button onPress={() => {navigation.navigate('firstViews')}} title='Go to second page'/>

        </View>
      </View>

      <View style={styles.containerFlexFooter}>
        <Text>Footer </Text>
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
      alignItems: 'center'
    },
    containerFlexCorps: {
      width:'100%',
      flex: 5,
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
    }, 
    headerTitle: {
        textAlign: 'center',
        fontSize: 24 
    },
    flexNote: {
        width: '60%',
        backgroundColor: '#B6E2CB'
    }
  });
export default homeViews ;