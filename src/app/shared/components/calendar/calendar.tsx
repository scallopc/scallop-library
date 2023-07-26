import React from "react";
import { CalendarContent, Icons, Wrapper } from "./styles";

type CalendarProps = {};

type Day = {
     day: number;
     isCurrentMonth: boolean;
};

const getDaysInMonth = (year: number, month: number): number => {
     return new Date(year, month + 1, 0).getDate();
};

const getMonthDays = (year: number, month: number): Day[] => {
     const daysInMonth = getDaysInMonth(year, month);
     const firstDay = new Date(year, month, 1).getDay();

     const days: Day[] = [];

     // Fill days from the previous month, if needed
     for (let i = 0; i < firstDay; i++) {
          days.push({ day: 0, isCurrentMonth: false });
     }

     // Fill days from the current month
     for (let day = 1; day <= daysInMonth; day++) {
          days.push({ day, isCurrentMonth: true });
     }

     return days;
};

const monthsNames = [
     "Janeiro",
     "Fevereiro",
     "Março",
     "Abril",
     "Maio",
     "Junho",
     "Julho",
     "Agosto",
     "Setembro",
     "Outubro",
     "Novembro",
     "Dezembro",
];

export function Calendar() {
     const date = new Date();
     const currYear = date.getFullYear();
     const currMonth = date.getMonth();
     let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
     let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
     let lastDayofMonth = new Date(
          currYear,
          currMonth,
          lastDateofMonth
     ).getDay();
     let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

     //const daysInCurrentMonth = getMonthDays(currentYear, currentMonth);

     const renderCalendar = (): JSX.Element[] => {
          let daysElements: JSX.Element[] = [];

          for (let i = firstDayofMonth; i > 0; i--) {
               // creating li of previous month last days
               daysElements.push(
                    <li key={`prev-${i}`} className="inactive">
                         {lastDateofLastMonth - i + 1}
                    </li>
               );
          }

          for (let i = 1; i <= lastDateofMonth; i++) {
               // creating li of all days of current month
               // adding active class to li if the current day, month, and year matched
               let isToday =
                    i === date.getDate() &&
                    currMonth === new Date().getMonth() &&
                    currYear === new Date().getFullYear()
                         ? "active"
                         : "";
               daysElements.push(
                    <li key={`curr-${i}`} className={isToday}>
                         {i}
                    </li>
               );
          }

          for (let i = lastDayofMonth; i < 6; i++) {
               // creating li of next month first days
               daysElements.push(
                    <li key={`next-${i}`} className="inactive">
                         {i - lastDayofMonth + 1}
                    </li>
               );
          }

          return daysElements; // Convert the array of elements to a single string
     };

     return (
          <Wrapper>
               <header>
                    <p className="current-date">
                         {monthsNames[currMonth]} {currYear}
                    </p>
                    <Icons>
                         <i className="bi bi-chevron-left" />
                         <i className="bi bi-chevron-right" />
                    </Icons>
               </header>
               <CalendarContent id="calendar">
                    <ul className="weeks">
                         <li>D</li>
                         <li>S</li>
                         <li>T</li>
                         <li>Q</li>
                         <li>Q</li>
                         <li>S</li>
                         <li>S</li>
                    </ul>
                    <ul className="days">{renderCalendar()}</ul>
               </CalendarContent>
          </Wrapper>
     );
}
