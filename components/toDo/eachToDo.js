import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './css/eachToDo.module.css';
import {ChangeStatusTaskList} from '../api/Tasks';

const EachToDo = props => {
  const [toggleCheckBox, setToggleCheckBox] = useState(
    props.toDo.status === 'Open' ? false : true,
  );
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('EditToDo', {
          toDo: props.toDo,
        });
      }}
      style={[styles.box, style.box]}>
      <CheckBox
        style={styles.checkBox}
        value={toggleCheckBox}
        onValueChange={() => {
          ChangeStatusTaskList(props.toDo._id, {
            status: props.toDo.status === 'Open' ? 'Close' : 'Open',
          });
          setToggleCheckBox(!toggleCheckBox);
        }}></CheckBox>
      <Text style={styles.text}>{props.toDo.text}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  box: {
    shadowColor: 'rgb(184, 3, 3)',
    elevation: 3,
  },
});

export default EachToDo;
