import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import styles from './css/comment.module.css';

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
      <TextInput
        multiline={true}
        placeholder="Write your comment"
        style={styles.text}></TextInput>
      <View style={styles.btn}>
        <Button color="rgb(184, 3, 3)" title="Send"></Button>
      </View>

      <ScrollView style={styles.comment}>
        {comment.map((each, index) => {
          return (
            <View style={styles.index} key={index}>
              <Text style={styles.name}>{each.name}</Text>
              <Text style={styles.said}> said </Text>
              <Text style={styles.cmnt}>"${each.comment}"</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Comment;
