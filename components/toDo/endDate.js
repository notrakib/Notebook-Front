import {Text, TextInput, View} from 'react-native';
import styles from './css/endDate.module.css';

const EndDate = props => {
  return (
    <View style={styles.half}>
      <Text style={styles.right}>End </Text>
      <View style={styles.picker}>
        <Text style={styles.inputR1} onPress={() => props.calHandaler()}>
          {props.dateRight}
        </Text>
        <TextInput
          onChangeText={newText => props.setTime(newText)}
          defaultValue={props.timeRight}
          style={styles.inputR2}></TextInput>
      </View>
    </View>
  );
};

export default EndDate;
