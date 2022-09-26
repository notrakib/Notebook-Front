import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import styles from './customCalender.module.css';

const CustomCalendar = props => {
  return (
    <Calendar
      style={styles.cal}
      minDate={new Date().toISOString().split('T')[0]}
      maxDate={new Date(+new Date() + 1209600000).toISOString().split('T')[0]}
      onDayPress={day => props.calHandaler(day)}
    />
  );
};

export default CustomCalendar;
