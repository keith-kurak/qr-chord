import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChordsListScreen from './ChordsListScreen';
import { StoreProvider } from '../stores';

const Stack = createNativeStackNavigator();

function NavigationRoot() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ChordsList"
            component={ChordsListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default NavigationRoot;
