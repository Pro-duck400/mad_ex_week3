import React from "react";
import { Text, StyleSheet } from "react-native";
import color from "../constants/color";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: color.buttonColor,
    padding: 20,
    borderRadius: 10,
  },
});