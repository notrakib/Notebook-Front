import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from './css/nav.module.css';
import SharedNote from '../sharedNote/sharedNote';
import {Text} from 'react-native';

const SharedNoteNav = () => {
  const Stack = createNativeStackNavigator();

  const options = {
    headerMode: 'float',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: 'rgb(184, 3, 3)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    headerLeft: () => (
      <Text style={styles.menu} onPress={() => {}}>
        Menu
      </Text>
    ),
    headerRight: () => (
      <Text style={styles.signin} title="Signin" onPress={() => {}}>
        Signin
      </Text>
    ),
  };

  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="AllSharedNote"
        component={SharedNote}
        options={{
          title: 'Shared Note',
        }}
      />
    </Stack.Navigator>
  );
};

export default SharedNoteNav;
