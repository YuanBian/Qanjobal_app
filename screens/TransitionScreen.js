import React from 'react';
import { useState, useEffect } from 'react';
import { TopicScreen } from './TopicScreen';
import { GlossaryScreen } from './GlossaryScreen';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ContentScreen } from './ContentScreen';

export const TransitionScreen = (props) => {
  return <ContentScreen params={props.route.params} />;
};
