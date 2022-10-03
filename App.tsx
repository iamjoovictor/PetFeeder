import { StatusBar } from 'expo-status-bar';
import styles from './AppStyles'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { AppBarComponent } from './src/components/appBarComponent';
import { ContentController } from './src/components/contentComponent';

export default function App() {

  const [choice, setChoice] = useState("dashboard");

  function changeScreen(value:any) {
    setChoice(value)
  }

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="#0066CC"
        translucent={false}
        networkActivityIndicatorVisible={true} />
      <AppBarComponent />
      <View style={styles.buttons}>
        <Pressable
          style = {styles.button} 
          onPress={ () => {
            changeScreen('dashboard')
          }}>
          <Text>Dashboard</Text>
        </Pressable>
        <Pressable 
          style = {styles.button}
          onPress={ () => {
            changeScreen('alarme')
          }}>
          <Text>Alarme</Text>
        </Pressable>
      </View>
      <View>
        <ContentController option={choice} />
      </View>
    </View>
  );
}
