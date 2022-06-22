import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { MenuItem } from '../components/MenuItem';

export const TopicScreen = ({ params }) => {
  const mode = params.mode;
  const language = params.language;
  const menus = params.menus;
  const onPress = () => {
    params.navigation('ContentScreen', {
      language: language,
      mode: mode,
      menus: menus,
    });
  };

  const menu = menus['english_topic_menu'];
  return (
    <SafeAreaView style={styles.container}>
      <Button mode='contained' onPress={{}}>
        <Text>{params.language}</Text>
      </Button>
      <View>
        {Object.entries(menu).map(([key, value]) => {
          console.log(value);
          return <MenuItem data={value} key={value[0]} />;
        })}
      </View>
    </SafeAreaView>
  );
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
  },
});
