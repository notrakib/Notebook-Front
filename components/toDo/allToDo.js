import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import AddButton from '../layout/addButton';
import {DeleteTask, FetchAllTasks} from '../api/Tasks';
import styles from './css/allToDo.module.css';

const AllToDo = () => {
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    FetchAllTasks()
      .then(tasks => setTasks(tasks))
      .catch();
  }, []);

  return (
    <View>
      <ScrollView style={styles.main}>
        {tasks.map((each, index) => {
          return (
            <View key={index} style={[style.dlt, styles.dlt]}>
              <Text
                style={styles.text}
                onPress={() => {
                  navigation.navigate('ToDoList', {taskId: each._id});
                }}>
                {each.toDoTitle}
              </Text>
              <Pressable
                style={styles.press}
                onPress={() =>
                  DeleteTask(each._id)
                    .then(() => navigation.goBack())
                    .catch()
                }>
                <Image
                  style={styles.icon}
                  source={require('../images/icons8-delete-96.png')}></Image>
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
      <AddButton Navigate={() => navigation.navigate('CreateToDo')} />
    </View>
  );
};

const style = StyleSheet.create({
  dlt: {
    shadowColor: 'rgb(184, 3, 3)',
    elevation: 3,
  },
});

export default AllToDo;
