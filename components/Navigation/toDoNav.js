import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllToDo from '../toDo/allToDo';
import ToDo from '../toDo/toDo';
import ToDoList from '../toDo/toDoList';

const ToDoNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AllToDo" component={AllToDo} />
      <Stack.Screen name="ToDoList" component={ToDoList} />
      <Stack.Screen name="EachToDo" component={ToDo} />
    </Stack.Navigator>
  );
};

export default ToDoNav;
