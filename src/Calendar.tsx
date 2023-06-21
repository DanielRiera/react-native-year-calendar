import * as React from 'react';
import { FlatList } from 'react-native'

import Month from './Month'

const Calendar = ({
    months = [0,1,2,3,4,5,6,7,8,9,10,11],
    numColumns = 1,
    events = [],
    year = new Date().getFullYear(),
    monthsShortNames = ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    monthsNames = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'],
    clickDay = () => {}
}) => {
  return (
    <FlatList
        scrollEnabled={false}
        numColumns={numColumns}
        data={months}
        renderItem={(props) => <Month {...props} events={events} year={year} data={{ monthsNames: monthsNames, monthsShortNames: monthsShortNames }} clickDay={clickDay} />}
    />
  )
}

export default Calendar