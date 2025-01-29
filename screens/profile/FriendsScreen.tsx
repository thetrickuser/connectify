import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet } from 'react-native';

const initialFriends = [
  { id: 1, username: 'friend1', name: 'Friend One', imageUrl: 'https://placehold.co/600x400.png' },
  { id: 2, username: 'friend2', name: 'Friend Two', imageUrl: 'https://placehold.co/600x400.png' },
  // Add more friends as needed
];

const FriendsScreen = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [search, setSearch] = useState('');

  const handleSearch = (text: string) => {
    setSearch(text);
    if (text) {
      // Replace this with actual search logic
      const filteredFriends = initialFriends.filter(friend => 
        friend.username.includes(text) || friend.name.includes(text)
      );
      setFriends(filteredFriends);
    } else {
      setFriends(initialFriends);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search friends"
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={friends}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.friendImage} />
            <View style={styles.friendInfo}>
              <Text style={styles.friendUsername}>{item.username}</Text>
              <Text style={styles.friendName}>{item.name}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    marginBottom: 20,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  friendInfo: {
    marginLeft: 10,
  },
  friendUsername: {
    fontWeight: 'bold',
  },
  friendName: {
    color: '#888',
  },
});

export default FriendsScreen;
