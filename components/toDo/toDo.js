import {View, TextInput} from 'react-native';
import styles from './toDo.module.css';

const ToDo = () => {
  const toDo = {
    text: 'By default, when you navigate a screen in the nested navigator,',
    startAt: 'wsedavgawdesgv',
    endAt: '3e4q2trfewqfedrfgv',
  };

  return (
    <TextInput style={styles.text} onPress={() => {}}>
      {toDo.text}
    </TextInput>
  );
};

export default ToDo;
