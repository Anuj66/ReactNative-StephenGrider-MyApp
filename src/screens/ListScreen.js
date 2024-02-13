import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "Friend#1",
      age: "25",
    },
    {
      name: "Friend#2",
      age: "25",
    },
    {
      name: "Friend#3",
      age: "25",
    },
    {
      name: "Friend#4",
      age: "25",
    },
    {
      name: "Friend#5",
      age: "25",
    },
    {
      name: "Friend#6",
      age: "25",
    },
    {
      name: "Friend#7",
      age: "25",
    },
    {
      name: "Friend#8",
      age: "25",
    },
    {
      name: "Friend#9",
      age: "25",
    },
    {
      name: "Friend#10",
      age: "25",
    },
    {
      name: "Friend#11",
      age: "25",
    },
    {
      name: "Friend#12",
      age: "25",
    },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={friends}
      keyExtractor={(friend) => {
        return friend.name;
      }}
      renderItem={(element) => {
        return (
          <Text style={styles.textStyle}>
            {element.item.name} - Age: {element.item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginLeft: 50,
  },
});

export default ListScreen;
