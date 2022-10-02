import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllNote from '../note/allNote';
import EditNote from '../note/editNote';
import WriteNote from '../note/writeNote';
import CustomHeader from '../layout/customHeader';

const NoteNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <CustomHeader {...props} />,
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
