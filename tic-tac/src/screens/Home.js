import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "../components/Title";
import TButton from "../components/TButton";
import Board from "../components/Board";
import color from "../constants/color";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Title>Home Screen</Title>
      </View>
      <View style={styles.middle}>
        <Board></Board>
      </View>
      <View style={styles.bottom}>
        <TButton buttonName="Rules" onPress={() => navigation.navigate("Rules")} />
        <TButton buttonName="Credits" onPress={() => navigation.navigate("Credits")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, backgroundColor: color.background},
  top: { justifyContent: "flex-start", alignItems: "center", paddingTop: 40 },
  middle: { flex: 1, justifyContent: "center", alignItems: "center" },
  bottom: {
    flexDirection: "row",      
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 60,
    width: "100%",            
  },
});