import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PlaceDetails() {
  return (
    <View>
      <Text>Plaace Details</Text>
     </View>
  );
}
PlaceDetails.navigationOptions = ({navigation}) => {
  const title = navigation.getParam('title')
  return {
    title:title
  }
}

const styles = StyleSheet.create({
  
})
