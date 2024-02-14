import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";

const Landing = ({ navigation }) => {
  return (
      <ImageBackground
        source={{ uri: "../assets/background.png"}}
        style={styles.backgroundImage}
        blurRadius={1}>
        <View styles={styles.backgroundImage}>
            <Text>
                Home Taste Hub welcome 
            </Text>
        </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",    
    flexDirection: 'row',
  },
  content: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default Landing;