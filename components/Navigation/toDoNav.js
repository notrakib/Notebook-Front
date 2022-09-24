import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllToDo from '../toDo/allToDo';
import ToDoList from '../toDo/toDoList';
import EditToDo from '../toDo/editToDo';

const ToDoNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AllToDo" component={AllToDo} />
      <Stack.Screen name="ToDoList" component={ToDoList} />
      <Stack.Screen name="EditToDo" component={EditToDo} />
    </Stack.Navigator>
  );
};

export default ToDoNav;
