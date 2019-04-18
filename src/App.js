import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import Header from "./components/Header"
import { directive } from "@babel/types"
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "pink"
  }
})
