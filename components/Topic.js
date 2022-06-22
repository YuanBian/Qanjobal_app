import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

export const Topic = ({ language, data, subitemState }) => {
  if (subitemState == '') {
    return (
      <SafeAreaView>
        <Text>Click something!</Text>
      </SafeAreaView>
    );
  } else {
    const subitemContent = data[subitemState];
    console.log(subitemContent);
    const video = subitemContent['video_name'];
    const english_transcription = subitemContent['english_transcription'];
    const spanish_transcription = subitemContent['spanish_transcription'];
    const qanjobal_transcription = subitemContent['qanjobal_transcription'];
    const english_advice = subitemContent['english' + '_advice1'];
    const spanish_advice = subitemContent['spanish' + '_advice1'];
    return (
      <SafeAreaView>
        <YoutubePlayer
          webViewStyle={styles.video}
          height={'70vw'}
          width={'70vw'}
          play={true}
          videoId={'r3ol0OkW50I'}
        />
        <View style={styles.container}>
          <Text>{video}</Text>
          <Text>{qanjobal_transcription}</Text>
          <Text>{spanish_transcription}</Text>
          <Text>{english_transcription}</Text>
          <Text>{english_advice}</Text>
          <Text>{spanish_advice}</Text>
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
    // backgroundColor: '#eee',
    flex: 0,
    backgroundColor: '#FFF',
    position: 'absolute',
    left: '0em',
    width: '30%',
  },
  video: { flex: 1, width: '100%' },
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
