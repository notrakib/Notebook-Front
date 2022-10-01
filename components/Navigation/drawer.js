import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text} from 'react-native';
import Tutorial from '../tutorial/tutorial';
import ToDoNav from './toDoNav';
import styles from './css/nav.module.css';
import TabNote from './tabNote';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
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
    drawerStyle: {
      backgroundColor: '#f5dfdf',
    },
  };

  return (
    <Drawer.Navigator screenOptions={options}>
      <Drawer.Screen name="Home" component={Tutorial} />
      <Drawer.Screen
        name="Notes"
        component={TabNote}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Tasks"
        component={ToDoNav}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
