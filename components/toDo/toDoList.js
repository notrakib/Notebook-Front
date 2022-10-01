import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import AddButton from '../layout/addButton';
import EachToDo from './eachToDo';
import styles from './css/toDoList.module.css';

const ToDoList = () => {
  const navigation = useNavigation();

  const toDo = [
    {
      text: 'By default, when you navigate a screen in the nested navigator,',
      startAt: 'wsedavgawdesgv',
      endAt: '3e4q2trfewqfedrfgv',
    },
    {
      text: 'By default, when you navigate a screen in the nested navigator,',
      startAt: 'wsedavgawdesgv',
      endAt: '3e4q2trfewqfedrfgv',
    },
    {
      text: 'By default, when you navigate a screen in the nested navigator,',
      startAt: 'wsedavgawdesgv',
      endAt: '3e4q2trfewqfedrfgv',
    },
    {
      text: 'By default, when you navigate a screen in the nested navigator,',
      startAt: 'wsedavgawdesgv',
      endAt: '3e4q2trfewqfedrfgv',
    },
  ];

  return (
    <View style={styles.main}>
      {toDo.map((each, index) => {
        return <EachToDo key={index} toDo={each} />;
      })}
      <AddButton Navigate={() => navigation.navigate('CreateToDoList')} />
    </View>
  );
};

export default ToDoList;
