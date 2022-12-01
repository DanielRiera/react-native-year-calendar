import * as React from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface EventProps {
    year: number,
    events: Event[],
    months: number[],
    style?: StyleProp<ViewStyle>,
    clickDay: any
}

const Event = (props: EventProps) => {
  return (
    <View style={styles.container}>
      <Text>Event</Text>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  container: {}
});
