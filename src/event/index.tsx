import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { EventC } from '../interfaces';

interface EventProps {
    events?: EventC[],
}

const Event = (props: EventProps) => {
  return (
    props.events ?
      props.events.map((ev) => {
        return (<View style={[styles.event, ev?.style ]}></View>)
      })
    : false
  );
};

export default Event;

const styles = StyleSheet.create({
  event: {
    backgroundColor: 'red',
    width: 4,
    height: 4,
    borderRadius: 100,
    marginRight: 2
  }
});
