const calenderContainer = document.getElementById("calendar");

function createCalendar(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  let calendarHTML = "";

  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarHTML += "<div class='day'></div>";
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarHTML += `<div class ='day'>${day}</div>`;
  }

  calenderContainer.innerHTML = calendarHTML;

}

const currentDate = new Date();
createCalendar(currentDate.getFullYear(), currentDate.getMonth());