import React, { Component } from "react"
import { Text, View, StyleSheet } from "react-native"

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}> stargate </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 116,
    backgroundColor: "#30d0fe",
    justifyContent: "center",
    alignContent: "flex-start",
    paddingLeft: 22,
    paddingTop: 71,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  text: {
    color: "white",
    fontSize: 28,
    fontFamily: "AvenirNext-DemiBold",
    textTransform: "uppercase"
  }
})
