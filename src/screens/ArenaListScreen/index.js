import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { useQuery } from "@apollo/react-hooks";

import ArenasQuery from "../../queries/Arenas";

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
  const { loading, error, data } = useQuery(ArenasQuery, {
    variables: {
      latitude, longitude, radius: 25,
    }
  });

  if (error) { console.log("ERROR!", error); }

  return (
    <View style={styles.container}>
      <Text>{latitude}</Text>
      <Text>{longitude}</Text>
    </View>
  );
};

export default ArenaListScreen;
