import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const onGoogleButtonPress = async () => {
  // await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

  const userInfo = await GoogleSignin.signIn();

  // const idToken = await GoogleSignin.signOut();
};

export {onGoogleButtonPress};
