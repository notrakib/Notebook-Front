import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from './css/note.module.css';
import Comment from './comment';

const Note = props => {
  const [showComment, setShowComment] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        setShowComment(!showComment);
      }}
      style={[styles.note, style.note]}>
      <Text style={styles.title}>{props.note.title}</Text>
      <View style={styles.share}>
        <Text style={styles.from}>{props.note.fromShared.split('@')[0]} </Text>
        <Text style={styles.rndm}>to </Text>
        <Text style={styles.to}>{props.note.toShared.split('@')[0]}</Text>
      </View>
      <Text style={styles.text}>{props.note.note}</Text>
      {showComment && <Comment comment={props.note} />}
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
