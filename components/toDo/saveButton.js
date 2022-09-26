import {Button} from 'react-native';

const SaveButton = props => {
  return (
    <Button
      onPress={() => {
        props.dateLeft === '0000-00-00'
          ? (sDate = null)
          : (sDate = new Date(`${props.dateLeft}T${props.timeLeft}`));
        props.dateRight === '0000-00-00'
          ? (eDate = null)
          : (eDate = new Date(`${props.dateRight}T${props.timeRight}`));

        console.log(sDate, eDate);
      }}
      color="blue"
      title="Save"></Button>
  );
};

export default SaveButton;
