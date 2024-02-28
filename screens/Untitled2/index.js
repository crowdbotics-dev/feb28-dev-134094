import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.HLHuttOi} source={{
        uri: "https://d2j9gdkk11xzei.cloudfront.net/6b06c212decd0eceeea67c7d55f95fcff7181ec6/studio/static/media/cb-symbol-new-black.e6c007698becdbf89c08.png"
      }} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  HLHuttOi: {
    width: 107,
    height: 62
  }
});
export default Untitled2;