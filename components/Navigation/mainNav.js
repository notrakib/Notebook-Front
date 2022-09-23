import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigatorToDo from '../toDo/navigatorTodo';
import AllNote from '../note/allNote';
import NavigatorNote from '../note/navigatorNote';
import Landing from '../layout/landing';
import NavigatorSharedNote from '../sharedNote/sharedNoteNavigator';
import Tutorial from '../tutorial/tutorial';

const MainNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tutorial" component={Tutorial} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="AllNote" component={AllNote} />
      <Stack.Screen name="ToDo" component={NavigatorToDo} />
      <Stack.Screen name="Note" component={NavigatorNote} />
      <Stack.Screen name="SharedNote" component={NavigatorSharedNote} />
    </Stack.Navigator>
  );
};

export default MainNav;
