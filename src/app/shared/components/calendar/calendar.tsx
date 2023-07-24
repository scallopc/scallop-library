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

     //const daysInCurrentMonth = getMonthDays(currentYear, currentMonth);

     const renderCalendar = () => {
          let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
               lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
               lastDayofMonth = new Date(
                    currYear,
                    currMonth,
                    lastDateofMonth
               ).getDay(), // getting last day of month
               lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
          let liTag = "";
          for (let i = firstDayofMonth; i > 0; i--) {
               // creating li of previous month last days
               liTag += `<li class="inactive">${
                    lastDateofLastMonth - i + 1
               }</li>`;
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
               liTag += `<li class="${isToday}">${i}</li>`;
          }
          for (let i = lastDayofMonth; i < 6; i++) {
               // creating li of next month first days
               liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
          }
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
                    <ul className="days"></ul>
               </CalendarContent>
          </Wrapper>
     );
}
