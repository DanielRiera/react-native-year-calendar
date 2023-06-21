import * as React from 'react';
import { View, Text } from 'react-native'


const HeaderCalendar = ({title = 'Mes'}) => {
  return (
    <View style={{alignItems:'center', marginBottom:5}}>
      <Text style={{fontWeight:'bold'}}>{title}</Text>
      <View style={{flexDirection:'row', marginTop:5}}>
        <Text style={{flex:1, textAlign:'center', fontSize: 10}}>L</Text>
        <Text style={{flex:1, textAlign:'center', fontSize: 10}}>M</Text>
        <Text style={{flex:1, textAlign:'center', fontSize: 10}}>X</Text>
        <Text style={{flex:1, textAlign:'center', fontSize: 10}}>J</Text>
        <Text style={{flex:1, textAlign:'center', fontSize: 10}}>V</Text>
        <Text style={{flex:1, textAlign:'center', fontSize: 10}}>S</Text>
        <Text style={{flex:1, textAlign:'center', fontSize: 10}}>D</Text>
      </View>
    </View>
  )
}

export default HeaderCalendar