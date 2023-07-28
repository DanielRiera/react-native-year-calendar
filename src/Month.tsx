import * as React from 'react';
import { View, Text, FlatList } from 'react-native'

import Day from './Day'
import HeaderCalendar from './HeaderCalendar'

const Month = ({item, year, data, events, clickDay}) => {
  const daysOfMonth = new Date(year, item+1, 0).getDate()
  let daysBefore = new Date(year, item, 1).getDay();
  if(daysBefore == 0) { daysBefore = 6; }else{ daysBefore-- }
  let daysAfeter = 7 - new Date(year, item+1, 0).getDay();
  return (
    <FlatList
        ListHeaderComponent={<HeaderCalendar title={data.monthsNames[item]} />}
        numColumns={7}
        scrollEnabled={false}
        style={{flexGrow: 7, margin:5}}
        data={Array.from(Array(daysBefore), (_, i) => -1).concat(Array.from(Array(daysOfMonth).keys())).concat(Array.from(Array(daysAfeter), (_, i) => -1))}
        renderItem={(props) => <Day events={events} year={year} month={item} clickDay={clickDay} {...props} />}
    />
  )
}

export default Month