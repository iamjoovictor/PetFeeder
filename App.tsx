import { StatusBar } from 'expo-status-bar';
import styles from './AppStyles'
import { Pressable, PressableProps, StyleSheet, Text, View, ViewComponent, ViewProps, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { AppBarComponent } from './src/components/appBarComponent';
import { ContentController } from './src/components/contentComponent';
import { useRef } from 'react';

export default function App() {

  const [choice, setChoice] = useState("dashboard");
  const [isActive, setIsActive] = useState(true);

  const buttonDashboard = useRef(null);

  function changeScreen(value:any) {
    setChoice(value)
  }

  function changeDashboard(){
    setIsActive(true);
  }

  function changeAlarme(){
    setIsActive(false);
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
        <TouchableOpacity
          style = {isActive ? styles.buttonDashboard : styles.buttonAlarme} 
          ref = {buttonDashboard}
          onPress={ () => {
            changeScreen('dashboard'),
            changeDashboard()
          }}>
          <Text>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style = {isActive ? styles.buttonAlarme : styles.buttonDashboard}
          onPress={ () => {
            changeScreen('alarme'),
            changeAlarme()
          }}>
          <Text>Alarme</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ContentController option={choice} />
      </View>
    </View>
  );
}
