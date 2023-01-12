const intToArray = (num: number) => {
    return Array.from({length: num}, (_, i) => i + 1)
}

const firstDayMonth = (instance: any) => {
    let dayWeek = instance.getDay();
        if(dayWeek == 0) {
            dayWeek = 6;
        }else{
            dayWeek--;
        }

        return dayWeek
}

const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, '0');
  }
  
const formatDate = (date: Date) : string => {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
  }

export { intToArray, firstDayMonth, formatDate, padTo2Digits }
