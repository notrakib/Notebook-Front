import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import styles from './comment.module.css';

const Comment = () => {
  const comment = [
    {
      comment: '11 How can i make my modal',
      name: 'Rakibul Huda',
    },
    {
      comment: '11 How can i make my modal',
      name: 'Khalid',
    },
    {
      comment: '11 How can i make my modal',
      name: 'Sabbir',
    },
    {
      comment: '11 How can i make my modal',
      name: 'Moti',
    },
  ];

  return (
    <View>
      <View>
        <TextInput
          placeholder="Write your comment"
          style={styles.text}></TextInput>
        <Button title="Send"></Button>
      </View>
      <ScrollView>
        {comment.map((each, index) => {
          return (
            <View key={index}>
              <Text>{each.name}</Text>
              <Text>{each.comment}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Comment;
