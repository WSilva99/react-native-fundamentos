import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

interface SkillCardProps extends TouchableOpacityProps {
  title: string;
}

export function SkillCard({ title, onPress, ...props }: SkillCardProps) {
  return (
    <TouchableOpacity onPress={onPress} {...props} style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 20,
    margin: 8,
    borderRadius: 16
  },
  textSkill: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
})