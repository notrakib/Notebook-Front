import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllToDo from '../toDo/allToDo';
import ToDoList from '../toDo/toDoList';
import EditToDo from '../toDo/editToDo';
import CreateToDoList from '../toDo/createToDoList';
import CreateToDo from '../toDo/createToDo';
import CustomHeader from '../layout/customHeader';

const ToDoNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <CustomHeader {...props} />,
      }}>
      <Stack.Screen
        name="AllToDo"
        component={AllToDo}
        options={{
          title: 'Task',
        }}
      />
      <Stack.Screen
        name="CreateToDo"
        component={CreateToDo}
        options={{
          title: 'Create Task',
        }}
      />
      <Stack.Screen
        name="CreateToDoList"
        component={CreateToDoList}
        options={{
          title: 'Create Task List',
        }}
      />
      <Stack.Screen
        name="ToDoList"
        component={ToDoList}
        options={{
          title: 'Task List',
        }}
      />
      <Stack.Screen
        name="EditToDo"
        component={EditToDo}
        options={{
          title: 'Edit Task',
        }}
      />
    </Stack.Navigator>
  );
};

export default ToDoNav;
