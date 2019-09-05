import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ArenaListScreen = ({ navigation }) => {
  const { latitude, longitude } = navigation.getParam("location");

  return (
    <View style={styles.container}>
      <Text>{latitude}</Text>
      <Text>{longitude}</Text>
    </View>
  );
};

export default ArenaListScreen;
