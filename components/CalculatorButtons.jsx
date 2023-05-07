import React from "react";
import { StyleSheet, View } from "react-native";
import CalculatorButton from "./CalculatorButton";

const CalculatorButtons = () => {
  return (
    <View style={styles.btnContainer}>
      <CalculatorButton text={"AC"} />
      <CalculatorButton text={"%"} />
      <CalculatorButton text={"+ / -"} />
      <CalculatorButton text={"/"} />
      <CalculatorButton text={7} />
      <CalculatorButton text={8} />
      <CalculatorButton text={9} />
      <CalculatorButton text={"x"} />
      <CalculatorButton text={4} />
      <CalculatorButton text={5} />
      <CalculatorButton text={6} />
      <CalculatorButton text={"-"} />
      <CalculatorButton text={1} />
      <CalculatorButton text={2} />
      <CalculatorButton text={3} />
      <CalculatorButton text={"+"} />
      <CalculatorButton text={0} />
      <CalculatorButton text={"."} />
      <CalculatorButton text={"="} />
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    // backgroundColor: 'red',
    width: "90%",
    height: "50%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CalculatorButtons;
