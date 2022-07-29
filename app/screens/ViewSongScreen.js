import * as React from 'react';
import { observer } from 'mobx-react';
import SongDetail from '../components/SongDetail';
import { useStore } from '../stores';

const ViewSongScreen = observer(function ({ route }) {
  const store = useStore();
  const { params } = route;
  const song = store.songForId(params.songId)
  return (
      <SongDetail song={song} mode="read" />
  );
});

export default ViewSongScreen;
