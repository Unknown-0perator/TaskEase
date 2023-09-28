const dayFormatter = (day) => {
    const dayLastDigit = day.toString().split();
    if (dayLastDigit[dayLastDigit.length - 1] === '1') {
        return `${day}st`
    } else if (dayLastDigit[dayLastDigit.length - 1] === '2') {
        return `${day}nd`
    } else if (dayLastDigit[dayLastDigit.length - 1] === '2') {
        return `${day}rd`
    } else {
        return `${day}th`
    }
}

export const displayDate = (dateInput, type) => {



    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let timeStamp = undefined;

    if (type === 'dayFormat') {
        timeStamp = new Date(dateInput)
    } else {
        timeStamp = new Date(Number(dateInput));
    }


    let weekday = timeStamp.getDay();
    let day = timeStamp.getDate();
    let month = timeStamp.getMonth() + 1;
    let monthIndex = timeStamp.getMonth();
    let year = timeStamp.getFullYear();
    let hour = timeStamp.getHours();
    let minute = timeStamp.getMinutes();

    if (type === 'dayFormat' && currentYear === year) {




        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${weekDays[weekday]}, ${months[monthIndex]} ${dayFormatter(day)}`
    }

    if (year === currentYear && month === currentMonth && day === currentDay && hour === currentHour && minute === currentMinute) {
        return 'Now';
    } else if (year === currentYear && month === currentMonth && day === currentDay && hour === currentHour) {
        return currentMinute - minute === 1 ? '1 minute ago' : `${currentMinute - minute} minutes ago`
    } else if (year === currentYear && month === currentMonth && day === currentDay && currentHour - hour === 1) {
        return `last hour`;
    } else if (year === currentYear && month === currentMonth && day === currentDay) {
        return `Today`;
    } else if (year === currentYear && month === currentMonth && currentDay - day === 1) {
        return 'Yesterday';
    } else if (year === currentYear && month === currentMonth && currentDay - day > 1 && currentDay - day < 7) {
        return `${currentDay - day} days ago`;
    } else {
        if (`${day}`.length < 2) day = `0${day}`;
        if (`${month}`.length < 2) month = `0${month}`;

        return `${month}/${day}/${year}`
    }
}

export const sideBarClick = (refArray, currentPage, sideRefArray, currentSidebar) => {
    sideRefArray.map(ref => {
        ref.current.classList.remove('post-task__sidebar__item--active')
    })
    currentSidebar.current.classList.add('post-task__sidebar__item--active')

    refArray.map(ref => {
        ref.current.classList.add('post-task__container--hidden')
    })
    currentPage.current.classList.remove('post-task__container--hidden')
}