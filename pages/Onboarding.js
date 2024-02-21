import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  //Button,
} from 'react-native';
//import { Divider, useTheme } from '@rneui/themed';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Home Taste Hub</Text>
    </View>
  );
};

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/background.png')}
      >
        <View style={styles.gradientOverlay} />
        <View style={styles.contentContainer}>
          <Header />
          <ScrollView style={styles.scrollContainer}>
            <Text style={styles.descriptionText}>
              {`\u2022 Eclectic `}
              {`\u2022 Home-Cooked `}
              {`\u2022 Fast-Delivery`}
              <Divider style={styles.button}/>
              <p/>Experience a culinary adventure with our eclectic global cuisine!
            </Text>
            <Button variant="contained" style={styles.button}>
              Get Started
            </Button>
            {/* Add more content as needed */}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: 'flex-end', // Align content at the bottom
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(256,255,254,0.6))',
  },
  contentContainer: {
    paddingHorizontal: wp('6%'),
    backgroundColor: 'rgba(128, 128, 128, 0.8)',
    paddingBottom: hp('5%'), // Adjusted to align content in the bottom half
  },
  headerContainer: {
    width: '100%',
    //backgroundColor: 'rgba(128, 128, 128, 0.8)',
    paddingVertical: hp('1.5%'),
    borderRadius: 10,
  },
  headerText: {
    textAlign: 'left',
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
    color: 'white', // Set the desired highlight color
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 4,
  },
  descriptionText: {
    marginBottom: hp('2%'),
    fontSize: hp('2%'),
    lineHeight: hp('3%'),
    textAlign: 'left',
    color: 'white', // Set the desired highlight color
    fontWeight: 'normal', // You can also adjust other styles like fontWeight, fontSize, etc.
  },
  button: {
    backgroundColor: "#00755E",
    textAlign: "center"
  }
});

export default Onboarding;
