import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Mileagecalc from './components/MileageCalc';
import SpentCalc from './components/SpentCalc';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  carouselContainer: {
    marginTop:200
  },
});

const Application = () => {
  const carouselItems = [
    {
      title: "Mileage Calculator",
      component: <Mileagecalc />,
    },
    {
      title: "Spent Calculator",
      component: <SpentCalc />,
    },
  ];

  const renderItem = ({ item, index }: { item: { title: string; component: JSX.Element }, index: number }) => {
    return (
      <View style={styles.carouselContainer}>
        {item.component}
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Carousel
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width * 0.8}
      />
    </View>
  );
}
export default Application;
