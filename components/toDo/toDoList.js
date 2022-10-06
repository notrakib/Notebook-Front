import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {FetchTaskLists} from '../api/Tasks';
import AddButton from '../layout/addButton';
import EachToDo from './eachToDo';
import styles from './css/toDoList.module.css';

const ToDoList = () => {
  const [taskLists, setTaskLists] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    FetchTaskLists(route.params.taskId)
      .then(taskList => setTaskLists(taskList))
      .catch();
  }, []);

  return (
    <View style={styles.main}>
      {taskLists.map((each, index) => {
        return <EachToDo key={index} toDo={each} />;
      })}
      <AddButton
        Navigate={() =>
          navigation.navigate('CreateToDoList', {taskId: route.params.taskId})
        }
      />
    </View>
  );
};

export default ToDoList;
