import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SongsListScreen from './SongsListScreen';
import { StoreProvider } from '../stores';
import ViewSongScreen from './ViewSongScreen';

const Stack = createNativeStackNavigator();

function NavigationRoot() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SongsList"
            component={SongsListScreen}
          />
          <Stack.Screen
            name="ViewSong"
            component={ViewSongScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default NavigationRoot;
