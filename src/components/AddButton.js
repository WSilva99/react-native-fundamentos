import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function AddButton({ handlePress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.7}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>
        Add
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 18
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold'
  },
})