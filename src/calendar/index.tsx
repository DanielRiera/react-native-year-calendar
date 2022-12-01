/**
 * @Author: Daniel Riera
 * @Version: 1.0.0
 */
  import moment from 'moment';
 import React from 'react';
 import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
 import Month from 'src/month';
//  const { width } = Dimensions.get('screen');
 
interface EventC {
  id: number,
  key: string,
  color: string,
  data: any
}

interface CalendarProps {
  year: number,
  events: EventC[],
  months: number[],
  style?: StyleProp<ViewStyle>,
  clickDay: any
}

const Calendar = (props: CalendarProps) => {
    const {
        year = moment().year(),
        events = [],
        months = [1,2,3,4,5,6,7,8,9,10,11,12],
        style = {},
        clickDay = false
    } = props;

    return (
        <View>
            <Text>{ year }</Text>
            <View style={[styles.container, style]}>
              { months.map((month: number) => <Month year={year} month={month} clickDay={clickDay} events={events} />) }
            </View>
        </View>
    );
}

export default Calendar;

const styles = StyleSheet.create({
  container: {

  }
})