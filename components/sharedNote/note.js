import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from './css/note.module.css';
import Comment from './comment';

const Note = props => {
  const [comment, setComment] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        setComment(!comment);
      }}
      style={[styles.note, style.note]}>
      <Text style={styles.title}>{props.note.title}</Text>
      <View style={styles.share}>
        <Text style={styles.from}>{props.note.sharedBy} </Text>
        <Text style={styles.rndm}>to </Text>
        <Text style={styles.to}>{props.note.sharedTo}</Text>
      </View>
      <Text style={styles.text}>{props.note.note}</Text>
      {comment && <Comment />}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  note: {
    shadowColor: 'blue',
    elevation: 3,
  },
});

export default Note;
