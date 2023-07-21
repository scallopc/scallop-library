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
          <div>
               <h2>
                    {monthsNames[currentMonth]} {currentYear}
               </h2>
               <table>
                    <thead>
                         <tr>
                              <th>D</th>
                              <th>S</th>
                              <th>T</th>
                              <th>Q</th>
                              <th>Q</th>
                              <th>S</th>
                              <th>S</th>
                         </tr>
                    </thead>
                    <tbody>
                         {daysInCurrentMonth.map((dayInfo, index) => {
                              return (
                                   <td
                                        key={index}
                                        style={{
                                             textAlign: "center",
                                             backgroundColor:
                                                  dayInfo.isCurrentMonth
                                                       ? "white"
                                                       : "#f2f2f2",
                                        }}
                                   >
                                        {dayInfo.day > 0 ? dayInfo.day : ""}
                                   </td>
                              );
                         })}
                    </tbody>
               </table>
          </div>
     );
}
