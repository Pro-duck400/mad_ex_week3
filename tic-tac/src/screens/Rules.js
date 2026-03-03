import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "../components/Title";
import TButton from "../components/TButton";
import Message from "../components/Message";

export default function Rules({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Title>Rules</Title>
      </View>
      <View style={styles.middle}>
        <Message messageText={`Tic-Tac-Toe Rules:
        1. The game is played on a 3x3 grid.
        2. There are two players: one is X, the other is O.
        3. Players take turns placing their mark (X or O) in an empty cell.
        4. The first player to get three of their marks in a horizontal, vertical, or diagonal row wins.
        5. If all 9 cells are filled and no player has three in a row, the game is a draw.

        This simple game helps practice logic and turn-based gameplay. Enjoy and have fun learning!`} />
      </View>
      <View style={styles.bottom}>
        <TButton buttonName="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, backgroundColor: "#fff" },
  top: { justifyContent: "flex-start", alignItems: "center", paddingTop: 60 },
  middle: { flex: 1, justifyContent: "center", alignItems: "center" },
  bottom: { justifyContent: "flex-end", alignItems: "center", marginBottom: 60 },
});