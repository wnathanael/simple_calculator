import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Results = () => {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.text}>Results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    backgroundColor: "#555555",
    width: "90%",
    height: "40%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderRadius: 10,
  },
  text: {
    //backgroundColor: "yellow",
    color: "white",
    fontSize: 20,
    margin: 10,
  },
});

export default Results;
