import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigatorToDo from '../toDo/navigatorTodo';
import AllNote from '../note/allNote';
import NavigatorNote from '../note/navigatorNote';
import NavigatorSharedNote from '../sharedNote/sharedNoteNavigator';
import Tutorial from '../tutorial/tutorial';
import {Text} from 'react-native';
import styles from './nav.module.css';

const MainNav = props => {
  const Stack = createNativeStackNavigator();

  const options = {
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
      <Text style={styles.menu} onPress={() => props.SideMenuHandaler()}>
        Menu
      </Text>
    ),
    headerRight: () => (
      <Text style={styles.signin} title="Signin" onPress={() => console.log(1)}>
        Signin
      </Text>
    ),
  };

  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Tutorial" component={Tutorial} />
      <Stack.Screen name="AllNote" component={AllNote} />
      <Stack.Screen name="ToDo" component={NavigatorToDo} />
      <Stack.Screen name="Note" component={NavigatorNote} />
      <Stack.Screen name="SharedNote" component={NavigatorSharedNote} />
    </Stack.Navigator>
  );
};

export default MainNav;
