import React from 'react';
import { types } from 'mobx-state-tree';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { mockChords } from './mockData';

const SongPart = types.model('SongPart', {
  type: types.string,
  chords: types.optional(types.array(types.string), []),
})

const Song = types.model('Chord', {
  id: types.identifier,
  name: types.string,
  parts: types.optional(types.array(SongPart), []),
});

const RootStore = types
  .model('RootStore', {
    songs: types.optional(types.array(Song), []),
  })
  .views((self) => ({
    get songsSorted() {
      return self.songs.slice();
    },
    songForId(id) {
      return self.songs.find(s => s.id === id)
    }
  }))
  .actions((self) => {

    function addSong({  }) {
      self.events.push({
        id: uuidv4(),
        tagId,
        time: new Date().getDate()
      })
    }

    return {
      addSong,
    }
  });

const StoreContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const store = RootStore.create({ songs: mockChords });
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

// We'll use this this to use the store in screen components
export const useStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    // not likely, but sure
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
