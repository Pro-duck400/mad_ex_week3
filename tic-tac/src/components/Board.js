import React from "react";
import { View, Text, StyleSheet } from "react-native";

const plays = ["O", "", "X", "X", "", "O", "", "X", ""];

export default function Board() {
  const Cell = ({ play }) => (
    <View style={styles.box}>
      <Text style={styles.text}>{play}</Text>
    </View>
  );

  return (
    <View style={styles.board}>
      {plays.map((p, i) => (
        <Cell key={i} play={p} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "orange",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 30,
  },
  box: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#090",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});