import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import styles from './allToDo.module.css';

const AllToDo = () => {
  const navigation = useNavigation();

  const toDo = [
    {
      toDoTitle: 'asdfvcasdwefvc',
      status: 'Open',
      createdAt: 'asfcdas',
      endedAt: '23erf',
    },
    {
      toDoTitle: 'asdfvcasdwefvc',
      status: 'Open',
      createdAt: 'asfcdas',
      endedAt: '23erf',
    },
    {
      toDoTitle: 'asdfvcasdwefvc',
      status: 'Open',
      createdAt: 'asfcdas',
      endedAt: '23erf',
    },
    {
      toDoTitle: 'asdfvcasdwefvc',
      status: 'Open',
      createdAt: 'asfcdas',
      endedAt: '23erf',
    },
    {
      toDoTitle: 'asdfvcasdwefvc',
      status: 'Open',
      createdAt: 'asfcdas',
      endedAt: '23erf',
    },
  ];

  return (
    <View style={styles.main}>
      {toDo.map((each, index) => {
        return (
          <Text
            style={[style.text, styles.text]}
            key={index}
            onPress={() => {
              navigation.navigate('ToDoList');
            }}>
            {each.toDoTitle}
          </Text>
        );
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

export default AllToDo;
