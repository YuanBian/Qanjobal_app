import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { doc, getDoc } from '@firebase/firestore';
import { db } from '../firebase/firebase-config';

export const WelcomeScreen = (props) => {
  const [menus, setMenus] = useState([]);
  const [glossary, setGlossary] = useState([]);
  const [topic, setTopic] = useState([]);
  // const [language, setLanguage] = useState('spanish');
  // const [mode, setMode] = useState('topic');
  useEffect(() => {
    const getData = async (dataType, setter) => {
      const docRef = doc(db, 'data', dataType);
      const docSnap = await getDoc(docRef);
      const d = docSnap.data()['data'];
      setter(JSON.parse(d));
    };
    getData('menus', setMenus);
    getData('glossary', setGlossary);
    getData('topic', setTopic);

    console.log('IM RENDERED');
    return () => {
      setMenus([]);
      setGlossary([]);
      setTopic([]);
    };
  }, []);

  const nav_to_transition = (initial_language) => {
    // setLanguage(initial_language);
    console.log('INITIAL: ' + initial_language);
    console.log('SELECTED: ' + initial_language);
    props.navigation.navigate('TransitionScreen', {
      language: initial_language,
      // setLanguage: setLanguage,
      mode: 'topic',
      // setMode: setMode,
      menus: menus,
      topic: topic,
      glossary: glossary,
    });
  };

  return (
    <SafeAreaView style={styles.welcomeContainter}>
      <Text>¡Bienvenido a la aplicación de Qanjobal!</Text>
      <Button mode='contained' onPress={() => nav_to_transition('spanish')}>
        Usa español
      </Button>
      <Button mode='contained' onPress={() => nav_to_transition('english')}>
        Use English
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
