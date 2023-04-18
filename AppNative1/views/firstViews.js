
import { IconButton, MD3Colors } from 'react-native-paper';

function firstViews() {
  return (
    <IconButton
    icon="plus-circle"
    iconColor='#E4BE9E'
    size={70}
    onPress={() => console.log('Vous avez ajouter une note ')}
  />
  )
}

export default firstViews
