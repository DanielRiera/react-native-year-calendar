import moment from 'moment';
import * as React from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Day from '../day';
import { firstDayMonth, intToArray } from '../utils';

interface EventC {
    id: number,
    key: string,
    color: string,
    data: any
  }

interface MonthProps {
    year: number,
    events?: EventC[],
    month: number,
    style?: StyleProp<ViewStyle>,
    clickDay?: any
}

const Month = (props: MonthProps) => {
    const monthInstance = moment().month(props.month).year(props.year)
    const first_day_jan = firstDayMonth(monthInstance);
    const daysOfMonth = monthInstance.daysInMonth()
    const calculateDays = intToArray(daysOfMonth);
    const first_blocks = intToArray(first_day_jan-1);
  return (
        <View style={styles.month}>
            <Text>{monthInstance.format('MMMM')}</Text>
            <View style={styles.container}>
                {
                    first_blocks.map(() => <View style={styles.day}></View>)
                }
                {
                    calculateDays.map((element: any, index: number) => { return <Day events={props.events} /> })
                }
            </View>
        </View>
  );
};

export default Month;

const styles = StyleSheet.create({
  container: {},
  month: {},
  day: {}
});
