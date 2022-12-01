import * as React from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle, Dimensions, TouchableOpacity } from 'react-native';
import { EventC } from '../interfaces';
import CalendarEvent from '../event';
const { width } = Dimensions.get('screen');

interface DayProps {
    events: EventC[],
    style?: StyleProp<ViewStyle>,
    styleText?: StyleProp,
    clickDay?: any,
    date: Date,
}

const Day = (props: DayProps) => {
  return (
    <TouchableOpacity onPress={() => { props?.clickDay ? props?.clickDay({
      current: props.date,
      events: props.events
    }) : false}} style={styles.day}>
      <Text style={props?.styleText}>{props.date.getDate()}</Text>
      <CalendarEvent events={props.events} />
    </TouchableOpacity>
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
