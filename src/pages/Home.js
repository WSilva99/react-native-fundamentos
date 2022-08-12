import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, Platform, FlatList } from 'react-native'
import { AddButton } from '../components/AddButton';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [gretting, setGretting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    setGretting((currentHour < 12) ? 'Good morning!' : (currentHour < 18) ? 'Good afternoon!' : 'Good night!')
  })

  function AddNewSkill() {
    if(skills.indexOf(newSkill) === -1 && newSkill !== '')
      setSkills(oldState => [...oldState, newSkill]);
    setNewSkill('');
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Welcome, Walmir Silva
        </Text>
        <Text style={styles.gretting}>
          {gretting}
        </Text>
        <TextInput
          style={styles.input}
          placeholder='New Skill'
          placeholderTextColor='#555'
          value={newSkill}
          onChangeText={setNewSkill}
        />
        <AddButton handlePress={AddNewSkill} />
        <Text style={[styles.title, {marginTop: 40, marginBottom: 28}]}>
          My Skills
        </Text>
        <FlatList
          data={skills}
          keyExtractor={item => item}
          renderItem={({item}) => (<SkillCard skill={item} />)}
        />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015'
  },
  title: {
    color: '#ffffff',
    fontSize: 24
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#ffffff',
    fontSize: 20,
    padding: Platform.OS === 'ios' ? 16 : 12,
    marginTop: 28,
    borderRadius: 8
  },
  gretting: {
    color: "#a370f7",
    fontSize: 18
  }
})