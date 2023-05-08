import React from "react";
import { StyleSheet, View } from "react-native";
import CalculatorButton from "./CalculatorButton";

const CalculatorButtons = ({ result, setResult }) => {
  const calculate = () => {
    setResult(eval(result));
  };

  return (
    <View style={styles.btnContainer}>
      <CalculatorButton
        text={"AC"}
        result={result}
        setResult={setResult}
        isOp={true}
      />
      <CalculatorButton
        text={"%"}
        result={result}
        setResult={setResult}
        isOp={true}
      />
      <CalculatorButton
        text={"+ / -"}
        result={result}
        setResult={setResult}
        isOp={true}
      />
      <CalculatorButton
        text={"/"}
        result={result}
        setResult={setResult}
        isOp={true}
      />
      <CalculatorButton
        text={"7"}
        result={result}
        setResult={setResult}
        isOp={false}
      />
      <CalculatorButton
        text={"8"}
        result={result}
        setResult={setResult}
        isOp={false}
      />
      <CalculatorButton
        text={"9"}
        result={result}
        setResult={setResult}
        isOp={false}
      />
      <CalculatorButton
        text={"x"}
        result={result}
        setResult={setResult}
        isOp={true}
      />
      <CalculatorButton
        text={"4"}
        result={result}
        setResult={setResult}
        isOp={false}
      />
      <CalculatorButton
        text={"5"}
        result={result}
        setResult={setResult}
        isOp={false}
      />
      <CalculatorButton
        text={"6"}
        result={result}
        setResult={setResult}
        isOp={false}
      />
      <CalculatorButton
        text={"-"}
        result={result}
        setResult={setResult}
        isOp={true}
      />
      <CalculatorButton
        text={"1"}
        result={result}
        setResult={setResult}
        isOp={false}
      />
      <CalculatorButton
        text={"2"}
        result={result}
        setResult={setResult}
        isOp={false}
      />
      <CalculatorButton
        text={"3"}
        result={result}
        setResult={setResult}
        isOp={false}
      />
      <CalculatorButton
        text={"+"}
        result={result}
        setResult={setResult}
        isOp={true}
      />
      <CalculatorButton
        text={"0"}
        result={result}
        setResult={setResult}
        isOp={false}
      />
      <CalculatorButton
        text={"."}
        result={result}
        setResult={setResult}
        isOp={true}
      />
      <CalculatorButton
        text={"="}
        result={result}
        setResult={setResult}
        isOp={true}
      />
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
