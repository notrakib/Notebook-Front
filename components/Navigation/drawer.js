import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tutorial from '../tutorial/tutorial';
import ToDoNav from './toDoNav';
import TabNote from './tabNote';
import CustomHeader from '../layout/customHeader';
import CustomDrawer from '../layout/customDrawer';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        header: props => <CustomHeader {...props} />,
      }}>
      <Drawer.Screen
        name="Home"
        component={Tutorial}
        options={{
          title: 'Home',
        }}
      />
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
