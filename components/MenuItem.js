import React from 'react';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Subitem } from './Subitem';
import { useState, useEffect } from 'react';

export const MenuItem = ({ menuData, subitemSetter }) => {
  const [submenuState, setSubmenuState] = useState(false);
  const { subitemState, setSubitemState } = subitemSetter;

  const onPress = () => {
    setSubmenuState(!submenuState);
  };
  // data looks like this:

  // ["A", [["english_translation", "spanish_translation"],[]]]
  return (
    <SafeAreaView>
      <Menu.Item
        title={menuData[0]}
        key={menuData[0]}
        onPress={onPress}
        titleStyle={styles.text}
      />
      {submenuState && (
        <Subitem
          subitemData={menuData[1]}
          subitemSetter={{ ...subitemSetter }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: '1.5vw',
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    left: '0em',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
});
