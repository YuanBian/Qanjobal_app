import React from 'react';
import { Button, Divider, Menu, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import { MenuItem } from '../components/MenuItem';
import { Topic } from '../components/Topic';
import { Glossary } from '../components/Glossary';
import { useState, useEffect } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

export const ContentScreen = ({ params }) => {
  const navigation = useNavigation();
  const [subitemState, setSubitemState] = useState('');
  const [notify, setNotify] = useState(false);
  // setMode, mode, language, setLanguage,

  const { mode, language, menus, topic, glossary } = params;

  const find_menu = (language, mode, menus) => {
    return menus[language + '_' + mode + '_menu'];
  };

  console.log(find_menu(language, mode, menus));
  const menu = find_menu(language, mode, menus);

  const switch_mode = () => {
    setNotify(!notify);
    setSubitemState('');
    navigation.navigate('TransitionScreen', {
      language: language,
      mode: mode == 'topic' ? 'glossary' : 'topic',
      menus: menus,
      topic: topic,
      glossary: glossary,
    });
  };
  const switch_language = () => {
    setNotify(!notify);
    setSubitemState('');
    navigation.navigate('TransitionScreen', {
      language: language == 'spanish' ? 'english' : 'spanish',
      mode: mode,
      menus: menus,
      topic: topic,
      glossary: glossary,
    });
  };

  // const [pressed, setPressed] = useState(false);
  const pressed = false;
  const [show, setShow] = useState(false);
  const switch_mode_button_text = (language, mode) => {
    if (language == 'english') {
      if (mode == 'topic') {
        return 'Go to glossary!';
      } else {
        return 'Go to topic!';
      }
    } else {
      if (mode == 'topic') {
        return 'ir al glosario';
      } else {
        return 'ir a temas';
      }
    }
  };

  const switch_language_button_text = (language) => {
    if (language == 'english') {
      return 'Usa Español';
    } else {
      return 'Use English';
    }
  };
  const about_button_text = (language) => {
    if (language == 'english') {
      return 'About Application';
    } else {
      return 'acerca de la aplicación';
    }
  };
  // cleanup
  useEffect(() => {
    // console.log('CHANGING');
    // setSubitemState('');

    return () => {
      // console.log('EXITING');
      setSubitemState('');
    };
  }, [notify]);
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const renderButton = () => {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, width: '100%' }}>
          <Button mode='contained' onPress={switch_mode}>
            {switch_mode_button_text(language, mode)}
          </Button>
          <Button mode='contained' onPress={switch_language}>
            {switch_language_button_text(language)}
          </Button>
          <Button
            mode='contained'
            onPress={() => {
              navigation.navigate('AboutScreen', {
                language: language,
              });
            }}
          >
            {about_button_text(language)}
          </Button>
        </View>
        {/* <Provider> */}
        {/* <Menu
          contentStyle={styles.contentContainerPressed}
          // visible={visible}
          // onDismiss={closeMenu}
          // anchor={<Button onPress={openMenu}>Show menu</Button>}
        > */}
        {/* <ScrollView> */}
        {Object.entries(menu).map(([key, value]) => {
          console.log(value);
          return (
            <View>
              <MenuItem
                style={styles.contentContainerPressed}
                menuData={value}
                subitemSetter={{
                  subitemState: subitemState,
                  setSubitemState: setSubitemState,
                }}
                key={value[0]}
              />
              <Divider />
            </View>
          );
        })}
        {/* </ScrollView> */}
        {/* </Menu> */}
        {/* </Provider> */}
      </View>
    );
  };
  return (
    <SafeAreaView>
      <Button
        style={styles.showButton}
        mode='contained'
        onPress={() => setShow(!show)}
      >
        Show Menu!
      </Button>
      {show && renderButton()}
      <View style={styles.contentContainer}>
        {mode == 'topic' ? (
          <Topic language={language} data={topic} subitemState={subitemState} />
        ) : (
          <Glossary
            language={language}
            data={glossary}
            subitemState={subitemState}
          />
        )}
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
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F9A959',
    color: 'black',
    position: 'absolute',
    left: '0em',
    width: '20%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  contentContainer: {
    // flex: 1,
    top: 40,
    left: '23em',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',
    position: 'sticky',
    width: '70%',
  },
  contentContainerPressed: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'black',
    position: 'absolute',
    // backgroundColor: '#996633',
  },
  showButton: {
    left: '90%',
    width: '10%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'red',
  },
});
