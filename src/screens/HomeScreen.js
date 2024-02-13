import React from "react";
import { Text, StyleSheet } from "react-native";
import ComponentScreen from "./ComponentScreen";
import ExcerciseComponent from "./Excercise";
import ListScreen from "./ListScreen";

const HomeScreen = () => {
  return <ListScreen />;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
