// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import R from '@R';

function UserScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{R.strings.user}</Text>
    </View>
  );
}

export default UserScreen;