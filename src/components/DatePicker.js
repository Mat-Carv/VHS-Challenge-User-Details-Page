import * as s from '../styles/UserUpdateStyles';

const DatePicker = (props) => {
    const { onChange, ...inputProps} = props

    let years = [];
    for (var i = 1930; i <= 2022; i++) {
        years.push(i);
    }

    const months = ['January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];

    const oddMonths = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
    const evenMonths = ['April', 'June', 'September', 'October', 'November'];

    let max = 0

    if(props.monthValue === 'February') {
        max = 28
    } else if (oddMonths.includes(props.monthValue)) {
        max = 31
    } else if (evenMonths.includes(props.monthValue)) {
        max = 30
    }

    let days = [];
    for (var i = 1; i <= max; i++) {
        days.push(i);
    }

    return(
        <s.InputContainer id="date-picker">
            <s.Select name="month" id="month" onChange={onChange}>
                {months.map((month, i) => (
                <option value={month} key={i}>{month}</option>
                ))}
            </s.Select>
            <s.Select name="day" id="day" onChange={onChange}>
                {days.map((day, i) => (
                <option value={day.toString()} key={i}>{day}</option>
                ))}
            </s.Select>
            <s.Select name="year" id="year" onChange={onChange}>
                {years.map((year, i) => (
                <option value={year.toString()} key={i}>{year}</option>
                ))}
            </s.Select>
        </s.InputContainer>
    )
}

export default DatePicker