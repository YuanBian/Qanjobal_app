import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Button } from 'react-native-paper';
import { Howl } from 'howler';
// import Sound from 'react-native-sound';
// var Sound = require('react-native-sound');

export const Glossary = ({ language, data, subitemState }) => {
  if (subitemState == '') {
    return (
      <SafeAreaView>
        <Text>Click something!</Text>
      </SafeAreaView>
    );
  } else {
    const subitemContent = data[subitemState];
    // console.log(subitemContent);
    const english_sentences = subitemContent['english_sentences'];
    const english_translation = subitemContent['english_translation']; // I changed it here
    const qanjobal_sentences = subitemContent['qanjobal_sentences'];
    const qanjobal_translation = subitemContent['qanjobal_translation'];
    const spanish_sentences = subitemContent['spanish_sentences'];
    const spanish_translation = subitemContent['spanish_translation'];

    return (
      <SafeAreaView>
        <View style={styles.container}>
          {/* <Button onPress={playTrack}> PLAY</Button> */}

          <Text>{subitemState}</Text>
          <audio
            src={
              'https://translate.google.com/translate_tts?ie=UTF-8&q=Hello%20World&tl=en&total=1&idx=0&textlen=11&client=tw-ob&prev=input&ttsspeed=1'
            }
            controls={true}
          ></audio>
          <Text>{english_translation}</Text>
          <Text>{english_sentences}</Text>
          <Text>{qanjobal_translation}</Text>
          <Text>{qanjobal_sentences}</Text>
          <Text>{spanish_translation}</Text>
          <Text>{spanish_sentences}</Text>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    position: 'absolute',
    left: '0em',
    width: '30%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'red',
  },
});
