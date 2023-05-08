import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CalculatorButton = ({ text, result, setResult, isOp }) => {
  return (
    <TouchableOpacity
      style={text !== "0" ? styles.btn : styles.btn0}
      onPress={() => {
        console.log(text);
        if (result === "0" && !isOp) {
          setResult(text);
          return;
        }
        switch (text) {
          case "AC":
            setResult("0");
            break;
          case "+ / -":
            if (result.chatAt(0) === "-") setResult(result.replaceAt(0, ""));
            else setResult("-" + result);
            break;
          case "%":
            setResult(eval(result) / 100);
            break;
          case "=":
            setResult(eval(result.replaceAll("x", "*")));
            break;
          default:
            setResult(result + text);
            break;
        }
      }}
    >
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
