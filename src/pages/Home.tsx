import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, Platform, FlatList } from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

type SkillData = {
  id: string,
  name: string
}

export function Home() {
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [gretting, setGretting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    setGretting((currentHour < 12) ? 'Good morning!' : (currentHour < 18) ? 'Good afternoon!' : 'Good night!')
  })

  function AddNewSkill() {
    if(newSkill !== '') {
      const skill = {
        id: String(new Date().getTime()),
        name: newSkill
      }
      setSkills(oldState => [...oldState, skill]);
    }
    setNewSkill('');
  }

  function RemoveSkill(id: string) {
    setSkills(oldState => oldState.filter(skill => skill.id !== id));
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
        <Button
          title={'ADD'}
          onPress={AddNewSkill}
        />
        <Text style={[styles.title, {marginTop: 40, marginBottom: 28}]}>
          My Skills
        </Text>
        <FlatList
          data={skills}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SkillCard
              title={item.name}
              onPress={() => RemoveSkill(item.id)}
            />)}
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