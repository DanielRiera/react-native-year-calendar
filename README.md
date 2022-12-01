# React Native Year Calendar
[![npm](https://img.shields.io/npm/l/react-native-year-calendar.svg)](https://npmjs.com/package/react-native-year-calendar) [![npm](https://img.shields.io/npm/v/react-native-year-calendar.svg)](https://npmjs.com/package/react-native-year-calendar) [![npm](https://img.shields.io/npm/dm/react-native-year-calendar.svg)](https://npmjs.com/package/react-native-year-calendar) [![Twitter](https://img.shields.io/badge/Twitter-Go%20to%20twitter-blue)](https://twitter.com/DaniRieraNet)



## Install

``npm install react-native-year-calendar --save ``

or 

``yarn add react-native-year-calendar``

## Minimal Example

Check [here a example](https://snack.expo.dev/@danielriera/example-react-native-year-calendar)

`````ts
import { StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-year-calendar';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Calendar clickDay={(day) => { console.log("Press day", day)}} events={[]} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

`````

## Params for Calendar

| Param  | Description  | Default  | Required  |
|---|---|---|---|
| events  | Event array  | []  | Y |
| year   | Year to show on calendar  | Current  | N  |
| months  | Array of months  | [0....11]  | N  |
| style  | Style for all calendar  | {}  |  N |
| clickDay  | Function fired when click on day | false  | N |

## Events Object

| key | type
|--|--
| id | number
| key | string
| color | string
|data | any
|style | StyleProp

## ToDo
Documentation
Use Date class (Remove moment package)
Events