import {StyleSheet, Text, View} from 'react-native';
import styles from './css/addButton.module.css';

const AddButton = props => {
  return (
    <View style={[style.main, styles.main]}>
      <Text onPress={() => props.Navigate()} style={styles.btn}>
        +
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    shadowColor: 'black',
    elevation: 5,
  },
});

export default AddButton;
