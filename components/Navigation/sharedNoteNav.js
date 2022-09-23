import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SharedNote from '../sharedNote/sharedNote';

const SharedNoteNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AllSharedNote" component={SharedNote} />
    </Stack.Navigator>
  );
};

export default SharedNoteNav;
