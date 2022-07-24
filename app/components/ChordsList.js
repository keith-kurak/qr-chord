import React from 'react';
import { observer } from 'mobx-react';
import { FlatList, View, Text } from 'react-native';

const Chord = observer(function ({ chord }) {
  return (
    <View style={{ padding: 10 }}>
      <Text>
        {chord}
      </Text>
    </View>
  );
});

const ChordsList = observer(function ({ }) {
  const renderItem = function ({ item }) {
    return <Chord chord={item} />;
  };

  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={{ marginTop: 30 }}
      keyExtractor={(item) => item.toString()}
      data={[1,2,3,4]}
      renderItem={renderItem}
    />
  );
});

export default ChordsList;
