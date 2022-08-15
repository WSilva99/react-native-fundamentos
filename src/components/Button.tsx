import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, onPress, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.7}
      onPress={onPress}
      {...props}
    >
      <Text style={styles.buttonText}>
        {title}
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