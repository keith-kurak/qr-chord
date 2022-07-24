import React from 'react';
import { types } from 'mobx-state-tree';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const Tag = types.model('Tag', {
  id: types.identifier,
  name: types.string,
  color: types.string,
  emoji: types.string,
});

const Event = types.model('Event', {
  id: types.identifier,
  tagId: types.reference(Tag),
  time: types.number,
});

const RootStore = types
  .model('RootStore', {
    tags: types.optional(types.array(Tag), []),
    events: types.optional(types.array(Event), []),
  })
  .views((self) => ({
    get tagsSorted() {
      return self.tags.slice();
    },
    get eventsSorted() {
      return self.events.slice();
    },
  }))
  .actions((self) => {
    function addTag() {

    }

    function addEvent({ tagId }) {
      self.events.push({
        id: uuidv4(),
        tagId,
        time: new Date().getDate()
      })
    }

    return {
      addTag,
      addEvent,
    }
  });

const StoreContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const store = RootStore.create({  });
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
