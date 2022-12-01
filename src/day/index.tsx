import * as React from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle, Dimensions } from 'react-native';
import { EventC } from '../interfaces';
const { width } = Dimensions.get('screen');

interface DayProps {
    events?: EventC[],
    style?: StyleProp<ViewStyle>,
    clickDay?: any,
    number: number
}

const Day = (props: DayProps) => {
  return (
    <View style={styles.day}>
      <Text>{props.number}</Text>
    </View>
  );
};

export default Day;

const styles = StyleSheet.create({
  day: {
    width: width / 15,
    padding:5,
    alignItems:'center'
  }
});
