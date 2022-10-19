import {useRef} from 'react';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import {PostComment} from '../api/Note';
import styles from './css/comment.module.css';

const Comment = props => {
  const cmnt = useRef();

  const PostCommentHandaler = () => {
    const new_comment = {
      name: 'fwef',
      comment: cmnt.current._internalFiberInstanceHandleDEV.memoizedProps.text,
    };

    props.comment.comment.push(new_comment);

    PostComment(props.comment)
      .then(() => {})
      .catch();
  };

  return (
    <View>
      <TextInput
        ref={cmnt}
        multiline={true}
        placeholder="Write your comment"
        style={styles.text}></TextInput>
      <View style={styles.btn}>
        <Button
          onPress={PostCommentHandaler}
          color="rgb(184, 3, 3)"
          title="Send"></Button>
      </View>

      <ScrollView style={styles.comment}>
        {props.comment.comment.map((each, index) => {
          return (
            <View style={styles.index} key={index}>
              <Text style={styles.name}>{each.name}</Text>
              <Text style={styles.said}> said </Text>
              <Text style={styles.cmnt}>{`"${each.comment}"`}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Comment;
