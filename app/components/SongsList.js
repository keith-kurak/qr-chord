import React from 'react';
import { observer } from 'mobx-react';
import { FlatList, View, Text, Pressable } from 'react-native';

const Song = observer(function ({ song, onPress }) {
  return (
    <Pressable onPress={onPress}>
    <View style={{ padding: 10 }}>
      <Text>
        {song.name}
      </Text>
    </View>
    </Pressable>
  );
});

const SongsList = observer(function ({ songs, onPressSong }) {
  const renderItem = function ({ item }) {
    return <Song song={item} onPress={() => { onPressSong(item.id)}} />;
  };

  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={{ marginTop: 30 }}
      keyExtractor={(item) => item.toString()}
      data={songs}
      renderItem={renderItem}
    />
  );
});

export default SongsList;
