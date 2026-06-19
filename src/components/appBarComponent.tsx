import React from "react";
import styles from "../styles/appBarStyles";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function AppBarComponent() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.viewAppBar, { paddingTop: insets.top }]}>
      <View style={styles.appbar}>
        <Text style={styles.title}>Pet Feeder</Text>
      </View>
    </View>
  );
}