import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Message({ messageText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{messageText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",   
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    width: "90%",             
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});