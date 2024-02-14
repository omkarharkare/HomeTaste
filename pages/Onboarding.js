import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
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
      <ImageBackground style={styles.backgroundImage} source={ require('../assets/background.png') }>
      <View style={styles.contentContainer}>
        <Header />
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.descriptionText}>
            Eclectic Home-Cooked Fast-Delivery
            Experience a culinary adventure
            with our eclectic global cuisine!
          </Text>
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
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: hp('6%'),
    paddingHorizontal: wp('6%'),
  },
  headerContainer: {
    width: '100%',
    backgroundColor: 'rgba(128, 128, 128, 0.8)',
    paddingVertical: hp('1.5%'),
    borderRadius: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
  },
  descriptionText: {
    marginBottom: hp('2%'),
    fontSize: hp('2%'),
    lineHeight: hp('3%'),
    textAlign: 'center',
  },
});

export default Onboarding;