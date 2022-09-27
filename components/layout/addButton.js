import {Text} from 'react-native';
import styles from './addButton.module.css';

const AddButton = props => {
  return (
    <Text onPress={() => props.Navigate()} style={styles.btn}>
      +
    </Text>
  );
};

export default AddButton;
