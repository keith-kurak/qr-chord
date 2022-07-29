import React from 'react';
import { observer } from 'mobx-react';
import { FlatList, View, Text, Pressable } from 'react-native';

const SongPart = observer(function ({ part }) {
  return (
    <View>
      <Text>
        {part.chords.map(c => <Text style={{ marginHorizontal: 5 }}>{c}</Text>)}
      </Text>
    </View>
  );
});

const SongDetail = observer(function ({ song, mode }) {
  const renderItem = function ({ item }) {
    return <SongPart part={item} />;
  };

  return (
    <FlatList
      style={{ flex: 1 }}
      keyExtractor={(item) => item.toString()}
      data={song.parts}
      renderItem={renderItem}
      ListHeaderComponent={<Text>{song.name}</Text>}
    />
  );
});

export default SongDetail;
