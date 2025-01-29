import React from 'react';
import IoIcon from 'react-native-vector-icons/Ionicons';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const stories = [
  { id: 0, username: 'user1', imageUrl: 'https://placehold.co/600x400.png' },
  { id: 1, username: 'user1', imageUrl: 'https://placehold.co/600x400.png' },
  { id: 2, username: 'user2', imageUrl: 'https://placehold.co/600x400.png' },
  { id: 3, username: 'user3', imageUrl: 'https://placehold.co/600x400.png' },
  { id: 4, username: 'user4', imageUrl: 'https://placehold.co/600x400.png' },
  { id: 5, username: 'user5', imageUrl: 'https://placehold.co/600x400.png' },
  { id: 6, username: 'user6', imageUrl: 'https://placehold.co/600x400.png' },
  { id: 7, username: 'user7', imageUrl: 'https://placehold.co/600x400.png' },
  // Add more stories as needed
];

const posts = [
  { id: 1, username: 'user1', imageUrl: 'https://placehold.co/600x400.png', description: 'Post 1 description' },
  { id: 2, username: 'user2', imageUrl: 'https://placehold.co/600x400.png', description: 'Post 2 description' },
  { id: 3, username: 'user2', imageUrl: 'https://placehold.co/600x400.png', description: 'Post 2 description' },
  { id: 4, username: 'user2', imageUrl: 'https://placehold.co/600x400.png', description: 'Post 2 description' },
  { id: 5, username: 'user2', imageUrl: 'https://placehold.co/600x400.png', description: 'Post 2 description' },
  { id: 6, username: 'user2', imageUrl: 'https://placehold.co/600x400.png', description: 'Post 2 description' },
  { id: 7, username: 'user2', imageUrl: 'https://placehold.co/600x400.png', description: 'Post 2 description' },
  { id: 8, username: 'user2', imageUrl: 'https://placehold.co/600x400.png', description: 'Post 2 description' },
  { id: 9, username: 'user2', imageUrl: 'https://placehold.co/600x400.png', description: 'Post 2 description' },
  { id: 10, username: 'user2', imageUrl: 'https://placehold.co/600x400.png', description: 'Post 2 description' },
  // Add more posts as needed
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Connectify</Text>
        <View style={styles.iconContainer}>
          <IoIcon name='notifications-outline' size={20} />
          <IoIcon name='chatbox-ellipses-outline' size={20} />
        </View>
      </View>
      <ScrollView horizontal style={styles.storyScrollView}>
        {stories.map(story => (
          <View key={story.id} style={styles.storyItem}>
            <Image source={{ uri: story.imageUrl }} style={styles.storyImage} />
            {story.id === 0 && (
              <View style={styles.addStoryButton}>
                <FaIcon name='plus-circle' color={'red'} size={20} />
              </View>
            )}
            <Text style={styles.storyUsername}>{story.username}</Text>
          </View>
        ))}
      </ScrollView>
      <ScrollView style={styles.postsScrollView}>
        {posts.map(post => (
          <View key={post.id} style={styles.postItem}>
            <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
            <View style={styles.postReactionContainer}>
              <View style={styles.postReaction}>
                <FaIcon size={20} name='heart-o' />
                <Text>1024</Text>
              </View>
              <View style={styles.postReaction}>
                <FaIcon size={20} name='comment-o' />
                <Text>1024</Text>
              </View>
              <View style={styles.postReaction}>
                <FaIcon size={20} name='share' />
                <Text>1024</Text>
              </View>
            </View>
            <Text style={styles.postUsername}>{post.username}</Text>
            <Text style={styles.postDescription}>{post.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  storyScrollView: {
    padding: 10,
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 10,
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  storyUsername: {
    fontSize: 12,
  },
  addStoryButton: {
    position: 'absolute',
    bottom: 20,
    right: 4,
  },
  postsScrollView: {
    padding: 10,
  },
  postItem: {
    marginBottom: 20,
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  postUsername: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  postDescription: {
    marginTop: 5,
  },
  postReactionContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'flex-start',
  },
  postReaction: {
    flexDirection: 'row',
    gap: 2,
  },
});

export default HomeScreen;
