import * as React from 'react';
import { observer } from 'mobx-react';
import SongsList from '../components/SongsList';
import { useStore } from '../stores';

const SongsListScreen = observer(function ({ navigation }) {
  const store = useStore();
  return (
      <SongsList songs={store.songsSorted} onPressSong={songId => navigation.navigate("ViewSong", { songId })} />
  );
});

export default SongsListScreen;
