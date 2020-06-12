import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import { useAuth } from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  button: {
    backgroundColor: '#4be373',
  },
});

const Signin: React.FC = () => {
  const {signed, signIn} = useAuth();

  console.log(signed);

  const handleSignIn = () => {
    signIn();
  };

  return (
    <View style={styles.container}>
      <Button color="#4be373" title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default Signin;
