import React from 'react';
import { observer } from 'mobx-react';
import { FlatList, View, Text, Pressable } from 'react-native';

const Chord = observer(function ({ chord, onPress }) {
  return (
    <Pressable onPress={onPress}>
    <View style={{ padding: 10 }}>
      <Text>
        {chord.name}
      </Text>
    </View>
    </Pressable>
  );
});

const ChordsList = observer(function ({ chords, onPressChord }) {
  const renderItem = function ({ item }) {
    return <Chord chord={item} onPress={() => { onPressChord(item.id)}} />;
  };

  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={{ marginTop: 30 }}
      keyExtractor={(item) => item.toString()}
      data={chords}
      renderItem={renderItem}
    />
  );
});

export default ChordsList;
