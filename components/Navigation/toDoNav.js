import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllToDo from '../toDo/allToDo';
import ToDoList from '../toDo/toDoList';
import EditToDo from '../toDo/editToDo';
import CreateToDoList from '../toDo/createToDoList';
import CreateToDo from '../toDo/createToDo';

const ToDoNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AllToDo" component={AllToDo} />
      <Stack.Screen name="CreateToDo" component={CreateToDo} />
      <Stack.Screen name="CreateToDoList" component={CreateToDoList} />
      <Stack.Screen
        name="ToDoList"
        component={ToDoList}
        options={{headerTitle: 'ToDo List'}}
      />
      <Stack.Screen name="EditToDo" component={EditToDo} />
    </Stack.Navigator>
  );
};

export default ToDoNav;
