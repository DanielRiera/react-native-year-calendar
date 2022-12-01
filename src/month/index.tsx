import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { MonthProps } from '../interfaces';
import Day from '../day';
import { firstDayMonth, formatDate, intToArray } from '../utils';
const { width } = Dimensions.get('screen');

const Month = (props: MonthProps) => {
    const dateInstance = new Date(props.year, props.month, 1, 0, 0, 0, 0);
    const first_day_jan = firstDayMonth(dateInstance);
    const calculateDays = intToArray(new Date(props.year, props.month+1, 0).getDate());
    const first_blocks = intToArray(first_day_jan);
    return (
          <View style={styles.month}>
              <Text style={{fontWeight:'bold'}}>{dateInstance.toLocaleString('default', { month: 'long' })}</Text>
              <View style={styles.container}>
                      <Text style={styles.day}>L</Text>
                      <Text style={styles.day}>M</Text>
                      <Text style={styles.day}>X</Text>
                      <Text style={styles.day}>J</Text>
                      <Text style={styles.day}>V</Text>
                      <Text style={styles.day}>S</Text>
                      <Text style={styles.day}>D</Text>
              </View>
              <View style={styles.container}>
                  { first_blocks.map(() => <View style={styles.day}></View>) }
                  { calculateDays.map((_day: any) => { return <Day clickDay={props?.clickDay} date={new Date(props.year, props.month, _day)} events={props.events[formatDate(new Date(props.year, props.month, _day))]}  /> }) }
              </View>
          </View>
    );
};

export default Month;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  month: {
    width: '50%'
  },
  day: {
    width: width / 15,
    padding:5,
    alignItems:'center',
    fontSize: 10,
    fontWeight:'bold',
    color:'#CCC',
    textAlign: 'center'
  }
});
