import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { EventC } from './interfaces';

interface EventProps {
    events?: EventC[]
}

const CalendarEvent = (props: EventProps) => {
  if(typeof props.events == 'undefined') {
    return <></>;
  }
  return (
    <View style={{flexDirection: 'row'}}>{
      props?.events.map((ev) => {
        return (<View style={[styles.event, ev?.style, {backgroundColor: ev?.color} ]}></View>)
      })
    }</View>
  );
};

export default CalendarEvent;

const styles = StyleSheet.create({
  event: {
    backgroundColor: 'red',
    width: 4,
    height: 4,
    borderRadius: 100,
    marginRight: 2
  }
});