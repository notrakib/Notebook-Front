import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import styles from './allNote.module.css';

const AllNote = () => {
  const navigation = useNavigation();

  const note = [
    {
      note: "11 How can i make my modal show from left to right the way a drawer came out. I'm using Modal from 'react-native', but i also installed react-native-modal module from https://github.com/react-native-community/react-native-modal/blob/master/README.md.",
    },
    {
      note: 'mmunity/react-native-modal/blob/master/README.md.',
    },
    {
      note: "11 How can i make my modal show from left to right the way a drawer came out. I'm using Modal from 'react-native', but i also installed react-native-modal module from https://github.com/react-native-community/react-native-modal/blob/master/README.md.",
    },
    {
      note: "11 How can i mg Modal from 'react-native', but i also installed react-native-modal module from https://github.com/react-native-community/react-native-modal/blob/master/README.md.",
    },
  ];

  return (
    <View style={styles.main}>
      {note.map((each, index) => {
        return (
          <Text
            onPress={() => {
              navigation.navigate('EditNote');
            }}
            style={styles.text}
            key={index}>
            {each.note}
          </Text>
        );
      })}
    </View>
  );
};

export default AllNote;
