import React from "react";

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
     const currentDate = new Date();
     const currentYear = currentDate.getFullYear();
     const currentMonth = currentDate.getMonth();

     const daysInCurrentMonth = getMonthDays(currentYear, currentMonth);

     return (
          <div className="wrapper">
               <header>
                    <p className="current-date">
                         {monthsNames[currentMonth]} {currentYear}
                    </p>
                    <div className="icons">
                         <i className="bi bi-chevron-left" />
                         <i className="bi bi-chevron-right" />
                    </div>
               </header>
               <div className="calendar">
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
               </div>
          </div>
     );
}
