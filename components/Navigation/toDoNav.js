import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';
import AllToDo from '../toDo/allToDo';
import ToDoList from '../toDo/toDoList';
import EditToDo from '../toDo/editToDo';
import CreateToDoList from '../toDo/createToDoList';
import CreateToDo from '../toDo/createToDo';
import styles from './css/nav.module.css';

const ToDoNav = () => {
  const Stack = createNativeStackNavigator();

  const options = {
    headerMode: 'float',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: 'rgb(184, 3, 3)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    headerLeft: () => (
      <Text style={styles.menu} onPress={() => {}}>
        Menu
      </Text>
    ),
    headerRight: () => (
      <Text style={styles.signin} title="Signin" onPress={() => {}}>
        Signin
      </Text>
    ),
  };

  return (
    <Stack.Navigator screenOptions={options}>
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
