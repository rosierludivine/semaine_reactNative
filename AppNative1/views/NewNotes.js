import React from "react";
import { Card, Text } from 'react-native-paper';
import { Avatar, IconButton } from 'react-native-paper';
import { View, StyleSheet} from "react-native/types";


function NewNotes() {
  return (
  <View style={styles.container}>
    <Card>
    <Card.Content>
      <Text variant="titleLarge">Votre titre </Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    </Card>
  </View>


  )
}


export default NewNotes

const styles = StyleSheet.create({
    container: {
      margin: 10, 
    }
})
