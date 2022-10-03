import React, { useState } from "react";
import { AppBar, HStack, IconButton, ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "../styles/appBarStyles";
import { Pressable, Text, View } from "react-native";

export function AppBarComponent() {

  return (
    <View style={styles.viewAppBar}>
      <AppBar
        color="blue"
        style={styles.appbar}
        title="Pet Feeder"
        centerTitle={true}
      />
    </View>
  );
}