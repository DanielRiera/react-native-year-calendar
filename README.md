# React Native Year Calendar
[![npm](https://img.shields.io/npm/l/react-native-year-calendar.svg)](https://npmjs.com/package/react-native-year-calendar) [![npm](https://img.shields.io/npm/v/react-native-year-calendar.svg)](https://npmjs.com/package/react-native-year-calendar) [![npm](https://img.shields.io/npm/dm/react-native-year-calendar.svg)](https://npmjs.com/package/react-native-year-calendar) ![Twitter Follow](https://img.shields.io/twitter/follow/danirieranet?style=social)



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
    <ScrollView style={{flex:1}}>
      <Calendar clickDay={(day) => { console.log("Press day", day)}} events={[]} />
    </ScrollView>
  );
}

`````

## Params for Calendar

| Param  | Description  | Default  | Required  |
|---|---|---|---|
| events  | Event Object index by date (YYYY-MM-DD)  | []  | Y |
| year   | Year to show on calendar  | Current  | N  |
| months  | Array of months  | [0....11]  | N  |
| style  | Style for all calendar  | {}  |  N |
| clickDay  | Function fired when click on day, with params (date, events) | false  | N |
| monthsNames | Array of Names for Month | ['January', 'February', ....]  | N | 
| monthsShortNames | Array of Short Name for Month | ['Jan', 'Feb', ....]  | N |
| numColumns  | Number of columns for calendar  | 1 | N

## Events Object

| key | type
|--|--
| id | number
| key | string
| color | string
| data | any
| style | StyleProp

## Event Object Example

A example of event object:

`````json
{
  '2023-01-01': [
    {
      color: 'red',
      id: 1,
      data: {...}
    }
  ],
  '2023-01-10': [
    {
      color: 'blue',
      id: 2,
      data: {...}
    }
  ]
}

`````
