import {Pressable, Text, View} from 'react-native';
import styles from './css/customHeader.module.css';

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <Pressable>
        <Text>Icon</Text>
      </Pressable>
      <Text>aswdad</Text>
      <Pressable>
        <Text>Signin</Text>
      </Pressable>
    </View>
  );
};

export default CustomHeader;
