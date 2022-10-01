import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';
import AllNote from '../note/allNote';
import EditNote from '../note/editNote';
import WriteNote from '../note/writeNote';
import styles from './css/nav.module.css';
import CustomHeader from '../layout/customHeader';

const NoteNav = () => {
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
    <Stack.Navigator
      screenOptions={{
        header: () => <CustomHeader />,
      }}>
      <Stack.Screen
        name="AllNote"
        component={AllNote}
        options={{
          title: 'Note',
        }}
      />
      <Stack.Screen
        name="WriteNote"
        component={WriteNote}
        options={{
          title: 'Write Note',
        }}
      />
      <Stack.Screen
        name="EditNote"
        component={EditNote}
        options={{
          title: 'Edit Note',
        }}
      />
    </Stack.Navigator>
  );
};

export default NoteNav;
