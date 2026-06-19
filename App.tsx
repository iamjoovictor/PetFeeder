import { StatusBar } from 'expo-status-bar';
import styles from './AppStyles';
import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppBarComponent } from './src/components/appBarComponent';
import { ContentController } from './src/components/contentComponent';

export default function App() {
  const [choice, setChoice] = useState('dashboard');
  const [isActive, setIsActive] = useState(true);

  return (
    <SafeAreaProvider>
      <StatusBar hidden={false} backgroundColor="#2563EB" translucent={false} />
      <View style={styles.outer}>
        <SafeAreaView style={styles.container} edges={['bottom']}>
          <AppBarComponent />
          <View style={styles.tabBar}>
            <TouchableOpacity
              style={[styles.tabButton, isActive && styles.tabButtonActive]}
              onPress={() => { setChoice('dashboard'); setIsActive(true); }}
            >
              <Text style={[styles.tabText, isActive && styles.tabTextActive]}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, !isActive && styles.tabButtonActive]}
              onPress={() => { setChoice('alarme'); setIsActive(false); }}
            >
              <Text style={[styles.tabText, !isActive && styles.tabTextActive]}>Alarmes</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <ContentController option={choice} />
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}
