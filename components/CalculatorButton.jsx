import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CalculatorButton = ({ text }) => {
  return (
    <TouchableOpacity style={text !== 0 ? styles.btn : styles.btn0}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    margin: 5,
    width: 70,
    height: 70,
    backgroundColor: "#757575",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  btn0: {
    margin: 5,
    width: 150,
    height: 70,
    backgroundColor: "#757575",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CalculatorButton;
