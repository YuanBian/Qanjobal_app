import React from 'react';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

export const Subitem = ({ subitemData, subitemSetter }) => {
  const { subitemState, setSubitemState } = subitemSetter;

  return subitemData.map((item) => {
    return (
      <Menu.Item
        title={item[1]}
        key={item[0]}
        onPress={() => {
          setSubitemState(item[0]);
        }}
        titleStyle={styles.text}
      />
    );
  });
};

const styles = StyleSheet.create({
  text: {
    fontSize: '1.1vw',
    fontWeight: 'bold',
    color: '#b90e0a',
  },
});
