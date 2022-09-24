import {View, Text, StyleSheet} from 'react-native';
import EachToDo from './eachToDo';

const ToDoList = () => {
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
        return <EachToDo key={index} toDo={each} />;
      })}
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    shadowColor: 'rgb(184, 3, 3)',
    elevation: 3,
  },
});

export default ToDoList;
