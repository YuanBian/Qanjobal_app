import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export const AboutScreen = (props) => {
  const language = props.route.params.language;

  if (language == 'English') {
    return (
      <SafeAreaView>
        <Text>
          If you have any questions or suggestions, please email Dr. Maldonado @
        </Text>
        <Text>App Developer: Yuan Bian </Text>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <Text>
          Si tiene alguna pregunta o sugerencia, envíe un correo electrónico al
          Dr. Maldonado
        </Text>
        <Text>Desarrollador de App : Yuan Bian </Text>
      </SafeAreaView>
    );
  }
};
