import React from "react";
import PropTypes from "prop-types";
import style from "./CalendarBody.style";

import WeekDay from "../../Components/WeekDay/WeekDay";
import Week from "../../Components/Week/Week";
import { DayConnector } from "../Provider";

class CalendarBody extends React.Component {
  constructor(props) {
    super(props);
  }

  calculateMonth = () => {
    const today = new Date(this.props.month);
    const currentMonthFirstDay = new Date(
      today.getFullYear(),
      today.getMonth()
    );
    const previousMonthLastDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    );
    const currentMonthLastDay = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    );
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0);
    const dateObjectArray = [];
    let count = 0;

    for (let i = 1; i <= currentMonthFirstDay.getDay(); i++) {
      dateObjectArray.push({
        dayNumber:
          previousMonthLastDay.getDate() - currentMonthFirstDay.getDay() + i,
        dateString: `${previousMonthLastDay.getFullYear()}-${previousMonthLastDay.getMonth() +
          1}-${previousMonthLastDay.getDate() -
          currentMonthFirstDay.getDay() +
          i}`,
        text: ""
      });
      count++;
    }

    for (let i = 1; i <= currentMonthLastDay.getDate(); i++) {
      dateObjectArray.push({
        dayNumber: i,
        dateString: `${this.props.month}-${i}`,
        text: "",
        isInThisMonth: true
      });
      count++;
    }

    for (let i = 1; count < 42; i++) {
      dateObjectArray.push({
        dayNumber: i,
        dateString: `${nextMonth.getFullYear()}-${nextMonth.getMonth() +
          1}-${i}`,
        text: ""
      });
      count++;
    }

    return dateObjectArray;
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.month !== this.props.month) return true;
    else return false;
  }

  render() {
    this.props.setDateObjectArray(this.calculateMonth());
    return (
      <div className={style.CalendarBody}>
        <table className={style.CalendarBody__table}>
          <WeekDay />
          <tbody>
            <Week weekNumber={0} />
            <Week weekNumber={1} />
            <Week weekNumber={2} />
            <Week weekNumber={3} />
            <Week weekNumber={4} />
            <Week weekNumber={5} />
          </tbody>
        </table>
      </div>
    );
  }
}

CalendarBody.propTypes = {
  month: PropTypes.string.isRequired,
  setDateObjectArray: PropTypes.func.isRequired
};

export default DayConnector(({ state, actions }) => ({
  month: `${state.year}-${state.month + 1}`,
  setDateObjectArray: actions.setDateObjectArray
}))(CalendarBody);
