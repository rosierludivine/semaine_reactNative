import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import homeViews from './views/homeViews';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="HomeApp"
        component={homeViews}
        options={{title: 'Home'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

