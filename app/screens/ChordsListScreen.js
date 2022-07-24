import * as React from 'react';
import { observer } from 'mobx-react';
import ChordsList from '../components/ChordsList';
import { useStore } from '../stores';

const ChordsListScreen = observer(function () {
  const store = useStore();
  return (
      <ChordsList events={store.eventsSorted} />
  );
});

export default ChordsListScreen;
