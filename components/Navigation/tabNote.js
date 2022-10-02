import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NoteNav from './noteNav';
import SharedNoteNav from './sharedNoteNav';
import CustomTab from '../layout/customTab';

const TabNote = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator tabBar={props => <CustomTab {...props} />}>
      <Tab.Screen
        name="Note"
        component={NoteNav}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Share Note"
        component={SharedNoteNav}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNote;
