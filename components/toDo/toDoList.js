import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';

import styles from './toDoList.module.css';

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
    <View>
      {toDo.map((each, index) => {
        return (
          <Text
            style={styles.text}
            key={index}
            onPress={() => {
              navigation.navigate('EachToDo');
            }}>
            {each.text}
          </Text>
        );
      })}
    </View>
  );
};

export default ToDoList;
