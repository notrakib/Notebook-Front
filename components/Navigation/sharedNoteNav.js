import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SharedNote from '../sharedNote/sharedNote';
import CustomHeader from '../layout/customHeader';

const SharedNoteNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <CustomHeader {...props} />,
      }}>
      <Stack.Screen
        name="AllSharedNote"
        component={SharedNote}
        options={{
          title: 'Shared Note',
        }}
      />
    </Stack.Navigator>
  );
};

export default SharedNoteNav;
