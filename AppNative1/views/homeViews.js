import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

function homeViews() {
  return (
    
    <View style={styles.container}>
      <View style={styles.containerFlexTitle}>
        <Text style={styles.headerTitle}>   My Notes </Text>
      </View>
      <View style={styles.containerFlexCorps}>
        <Text>CORPS </Text>
        {/* creation d'un bouton pour changement de vue  */}
        <View style={styles.flexNote}>
            {/* cette view va etre la note  */}

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
      flex: 1,
      color:'#B6E2CB',
    },
    containerFlexCorps: {
      width:'100%',
      flex: 5,
      color: '#B6E2CB',
    },
    containerFlexFooter: {
      width:'100%',
      flex: 1,
      backgroundColor: '#B6E2CB',
    },
    buttonChangeVue: {
      width:'60%',
    }, 
    headerTitle: {
        fontFamily: 'Italiana',
        textAlign: 'center',
        fontSize: 24 
    },
    flexNote: {
        width: '60%',
        backgroundColor: '#B6E2CB'
    }
  });
export default homeViews ;