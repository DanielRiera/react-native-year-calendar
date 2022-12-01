import * as React from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface EventC {
  id: number,
  key: string,
  color: string,
  data: any
}

interface DayProps {
    events?: EventC[],
    style?: StyleProp<ViewStyle>,
    clickDay?: any
}

const Day = (props: DayProps) => {
  return (
    <View style={styles.container}>
      <Text>Day</Text>
    </View>
  );
};

export default Day;

const styles = StyleSheet.create({
  container: {}
});
