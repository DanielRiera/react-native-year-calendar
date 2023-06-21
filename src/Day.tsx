import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

import CalendarEvent from './CalendarEvent'
import { formatDate } from './Utils';

const Day = ({item, events, month, year, clickDay}) => {
  const d = new Date(year, month, item);
  return (
    <TouchableOpacity disabled={item == -1} onPress={() => clickDay(d, typeof events[formatDate(d)] != 'undefined' ? events[formatDate(d)] : [])} style={{flex:1, alignItems:'center', marginBottom:5}}>
      {
        item != -1 ?
        <>
          <Text>{item+1}</Text>
          <CalendarEvent events={typeof events[formatDate(d)] != 'undefined' ? events[formatDate(d)] : []} />
        </>
        : false
      }
      
    </TouchableOpacity>
  )
}

export default Day