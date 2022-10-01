import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NoteNav from './noteNav';
import SharedNoteNav from './sharedNoteNav';

const TabNote = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator sceneContainerStyle>
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
