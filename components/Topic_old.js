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
      <SafeAreaView
        style={{
          flexDirection: 'column',
          flex: 1,
          width: '100%',
          justifyContent: 'space-between',
          gap: '300px',
        }}
      >
        <YoutubePlayer
          webViewStyle={styles.video}
          height={'30vw'}
          width={'30vw'}
          play={true}
          videoId={'r3ol0OkW50I'}
        />
        <View style={styles.container}>
          {/* <Text>{video}</Text>
          <Text>{qanjobal_transcription}</Text>
          <Text>{spanish_transcription}</Text>
          <Text>{english_transcription}</Text>
          <Text>{english_advice}</Text>
          <Text>{spanish_advice}</Text> */}
          <Text>
            Chi wochej chi wiaj teq junoq tx’an un b’ay snahil unejChi wochej
            chi wiaj teq junoq tx’an un b’ay snahil unejChi wochej chi wiaj teq
            junoq tx’an un b’ay snahil unej Chi wochej chi wiaj teq junoq tx’an
            un b’ay snahil unejChi wochej chi wiaj teq junoq tx’an un b’ay
            snahil unejChi wochej chi wiaj teq junoq tx’an un b’ay snahil unej
            Chi wochej chi wiaj teq junoq tx’an un b’ay snahil unejChi wochej
            chi wiaj teq junoq tx’an un b’ay snahil unejChi wochej chi wiaj teq
            junoq tx’an un b’ay snahil unej
          </Text>
          <Text>
            La biblioteca gratuita de Urbana y de Champaign le permiten acceder
            al uso de computadoras de la biblioteca presentando una
            identificación con fotografía o tu tarjeta de la biblioteca. Las
            computadoras están en el centro de computadoras localizado en el
            segundo piso de la biblioteca. Igualmente, si traes tu propio
            teléfono inteligente, computadora o cualquier otro dispositivo
            puedes acceder al internet gratis. (Urbanafreelibrary.org) Wifi
            (internet): Wifi es un sistema de conexión inalámbrica que permite
            que las computadoras, teléfonos inteligentes u otros dispositivos se
            conecten a Internet o se comuniquen entre sí de forma inalámbrica
            dentro de un área en particular. Esto es importante para acceder a
            los portales web en línea, mantenerse conectado con el mundo y,
            posiblemente, obtener conocimientos sobre hechos actuales de tu
            comunidad y el mundo.
          </Text>
          <Text>
            The free Urbana-Champaign Library allows you to use library
            computers by presenting a photo ID or your library card. The
            computers are in the computer lab located on the second floor of the
            library. Likewise, if you bring your own smartphone, computer or any
            other device you can access the internet for free.
            (Urbanafreelibrary.org) Wifi (internet): Wifi is a wireless
            connection system that allows computers, smartphones, or other
            devices to connect to the Internet or communicate with each other
            wirelessly within a particular area. This is important for accessing
            online web portals, staying connected to the world, and possibly
            gaining insight into current events in your community and the world.
          </Text>
          <Text>english_advice</Text>
          <Text>spanish_advice</Text>
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
  video: { flex: 1, width: '100%', justifyContent: 'center' },
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
