import moment from 'moment';
import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { MonthProps } from '../interfaces';
import Day from '../day';
import { firstDayMonth, intToArray } from '../utils';
const { width } = Dimensions.get('screen');

const Month = (props: MonthProps) => {
    const monthInstance = moment().month(props.month).year(props.year)
    const first_day_jan = firstDayMonth(monthInstance);
    const calculateDays = intToArray(monthInstance.daysInMonth());
    const first_blocks = intToArray(first_day_jan-1);
  return (
        <View style={styles.month}>
            <Text>{monthInstance.format('MMMM')}</Text>
            <View style={styles.container}>
                    <Text style={[styles.day, {fontSize: 10, fontWeight:'bold', color:'#CCC', textAlign: 'center'}]}>L</Text>
                    <Text style={[styles.day, {fontSize: 10, fontWeight:'bold', color:'#CCC', textAlign: 'center'}]}>M</Text>
                    <Text style={[styles.day, {fontSize: 10, fontWeight:'bold', color:'#CCC', textAlign: 'center'}]}>X</Text>
                    <Text style={[styles.day, {fontSize: 10, fontWeight:'bold', color:'#CCC', textAlign: 'center'}]}>J</Text>
                    <Text style={[styles.day, {fontSize: 10, fontWeight:'bold', color:'#CCC', textAlign: 'center'}]}>V</Text>
                    <Text style={[styles.day, {fontSize: 10, fontWeight:'bold', color:'#CCC', textAlign: 'center'}]}>S</Text>
                    <Text style={[styles.day, {fontSize: 10, fontWeight:'bold', color:'#CCC', textAlign: 'center'}]}>D</Text>
            </View>
            <View style={styles.container}>
                {
                    first_blocks.map(() => <View style={styles.day}></View>)
                }
                {
                    calculateDays.map((_day: any, index: number) => { return <Day number={index+1} events={props.events} /> })
                }
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
    width: width / 2
  },
  day: {
    width: width / 15,
    padding:5,
    alignItems:'center'
  }
});
