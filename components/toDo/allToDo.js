import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
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
    <View>
      {toDo.map((each, index) => {
        return (
          <Text
            style={styles.text}
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

export default AllToDo;
