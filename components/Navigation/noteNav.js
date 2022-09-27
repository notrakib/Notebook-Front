import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllNote from '../note/allNote';
import EditNote from '../note/editNote';
import WriteNote from '../note/writeNote';

const NoteNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AllNote" component={AllNote} />
      <Stack.Screen name="WriteNote" component={WriteNote} />
      <Stack.Screen name="EditNote" component={EditNote} />
    </Stack.Navigator>
  );
};

export default NoteNav;
