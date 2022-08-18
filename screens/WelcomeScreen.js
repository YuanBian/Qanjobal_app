import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Q'anjob'al</Text>
      </View>
      <Image
        source={require('../assets/favicon.png')}
        style={{
          width: 40,
          height: 40,
          top: '-0.25em',
          left: '0em',
          position: 'absolute',
        }}
      />
      <SafeAreaView style={styles.welcomeContainter}>
        {/* <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          // style={{ width: 400, height: 400 }}
        /> */}
        <Text style={styles.text}>
          ¡Bienvenido a la aplicación de idioma Q'anjob'al! <br />
          Esta aplicación está dedicada a mejorar la alfabetización de
          Q'anjob'al en la comunidad de habla Q'anjob'al y difundir información
          sobre COVID en Q'anjob'al.
        </Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Seleccionar su idioma: </Text>
          <Button mode='contained' onPress={() => nav_to_transition('spanish')}>
            🇲🇽 Español
          </Button>

          <Button mode='contained' onPress={() => nav_to_transition('english')}>
            🇺🇸 English
          </Button>
        </View>
        {/* <View style={styles.footer}>
          <Text>@ 2022 Department of Anthropology at UIUC </Text>
        </View> */}
      </SafeAreaView>
      <View style={styles.footer}>
        <Text>@ 2022 Department of Anthropology at UIUC </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    // width: '100%',
    height: '2em',
    backgroundColor: '#E1A526',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    // textAlign: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // alignItems: 'center',
    // justifyContent: 'center',
    gap: '50px',
  },
  welcomeContainter: {
    // flex: 1,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    textAlign: 'center',
    gap: '30px',
    width: '40%',
    left: '30%',
    top: '2em',
    // backgroundColor: "red"
  },
  text: {
    fontSize: '20px',
    // color: 'red',
  },
  buttonContainer: {
    // flex: 1,
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute', // fixed
    left: 0,
    bottom: '1em',
    width: '100%',
    backgroundColor: 'white',
    color: 'white',
    textAlign: 'center',
  },
});
