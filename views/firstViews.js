import React from "react";
import { Card, IconButton  } from 'react-native-paper';
import { TextInput, Text } from 'react-native-paper';
import { useState } from "react";

function firstViews() {
  const [text, setText] = useState("");

  return (
    <Card>
      <TextInput label="texte"  value={text}   onChangeText={text => setText(text)} />
      <IconButton icon="plus-circle" iconColor='#E4BE9E' size={70} onPress={() => console.log({text})}/>
      <Text variant="displayLarge">{}</Text>
    </Card>
  )
}

export default firstViews;
