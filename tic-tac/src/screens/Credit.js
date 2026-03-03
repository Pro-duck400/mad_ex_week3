import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "../components/Title";
import TButton from "../components/TButton";
import Message from "../components/Message";

export default function Credits({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Title>Credits</Title>
      </View>
      <View style={styles.middle}>
        <Message messageText={`This Tic-Tac-Toe app was developed by Katya as part of the Week 3 Mobile Application Development workshop at Griffith University. 

        The project demonstrates basic React Native skills, including:
        - Screen navigation using React Navigation
        - Reusable components (Title, TButton, Message)
        - Styling with StyleSheet
        - Layout with Flexbox
        - Handling messages and buttons

        Special thanks to the course instructors and fellow students for their support during development. This app is intended for educational purposes and to help students learn React Native fundamentals.`} />
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