import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Welcome to Gotcha!</Text>
    <Text>In order to get the arenas you can play in, we need to ask for your location first so you can find one nearby.</Text>
    <Button title="Find Nearby Arenas" onPress={() => console.log("Hello World")} />
  </View>
);

export default HomeScreen;
