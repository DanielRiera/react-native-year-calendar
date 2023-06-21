import { StyleProp, ViewStyle } from 'react-native';

interface EventC {
    id: number,
    key: string,
    color: string,
    data: any,
    style?: StyleProp<ViewStyle>
}

interface MonthProps {
    year: number,
    events: any,
    month: number,
    style?: StyleProp<ViewStyle>,
    clickDay?: any
}

export { EventC, MonthProps}