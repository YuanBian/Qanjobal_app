import React from 'react';
import { useState, useEffect } from 'react';
import { TopicScreen } from './TopicScreen';
import { GlossaryScreen } from './GlossaryScreen';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const ContentScreen = (props) => {
  const data = props.route.params;
  const mode = data.mode;
  const language = data.language;
  const menus = data.menus;
  console.log('CONTENT PAGE!');

  const params = {
    language: language,
    mode: mode,
    menus: menus,
    navigation: props.navigation.navigate,
  };
  return mode == 'topic' ? (
    <TopicScreen params={params} />
  ) : (
    <GlossaryScreen params={params} />
  );
};
