import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class HomeScreen extends React.Component {
  static async getLocation() {
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});

    return { latitude, longitude };
  }

  handleGrantPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      console.log("We need your location");
    }

    this.navigate();
  }

  navigate = async () => {
    const { navigation } = this.props;
    const location = await HomeScreen.getLocation();

    navigation.navigate("ArenaList", { location: location });
  }

  async componentWillMount() {
    if (await Location.hasServicesEnabledAsync()) {
      this.navigate();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Gotcha!</Text>
        <Text>In order to get the arenas you can play in, we need to ask for your location first so you can find one nearby.</Text>
        <Button title="Find Nearby Arenas" onPress={this.handleGrantPermissions} />
      </View>
    );
  }
}

export default HomeScreen;
