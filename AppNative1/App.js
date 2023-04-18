import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import homeViews from './views/homeViews';
import firstViews from './views/firstViews';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeApp" component={homeViews} options={{title: 'Home'}}/>
        <Stack.Screen name="firstViews" component={firstViews} options={{title: 'Second'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

