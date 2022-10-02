import {Image, Text, TouchableHighlight, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './css/customTab.module.css';

const CustomTab = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View style={styles.btn}>
        <TouchableHighlight
          underlayColor="#017d01"
          onPress={() => navigation.navigate('Note')}>
          <View style={styles.option}>
            <Image
              style={styles.icon}
              source={require('../images/icons8-note-96.png')}></Image>
            <Text style={styles.text}>Note</Text>
          </View>
        </TouchableHighlight>
      </View>

      <View style={styles.btn}>
        <TouchableHighlight
          underlayColor="#017d01"
          onPress={() => navigation.navigate('Share Note')}>
          <View style={styles.option}>
            <Image
              style={styles.icon}
              source={require('../images/icons8-share-96.png')}></Image>
            <Text style={styles.text}>Share</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default CustomTab;
