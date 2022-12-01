const intToArray = (num: number) => {
    return Array(num).fill(0);
}

const firstDayMonth = (instance: any) => {
    let dayWeek = instance.day();
        if(dayWeek == 0) {
            dayWeek = 7;
        }

        return dayWeek
}

export { intToArray, firstDayMonth }