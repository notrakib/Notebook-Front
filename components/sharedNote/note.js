import {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './note.module.css';
import Comment from './comment';

const Note = props => {
  const [comment, setComment] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        setComment(!comment);
      }}
      style={styles.note}>
      <Text>Shared by {props.note.sharedBy}</Text>
      <Text>Shared To {props.note.sharedTo}</Text>
      <Text style={styles.text}>{props.note.note}</Text>
      {comment && <Comment />}
    </TouchableOpacity>
  );
};

export default Note;
