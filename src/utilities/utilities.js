export const displayDate = (dateInput) => {
    let currentDate = new Date();
	let currentDay = currentDate.getDate();
	let currentMonth = currentDate.getMonth() + 1;
	let currentYear = currentDate.getFullYear();
	let currentHour = currentDate.getHours();
	let currentMinute = currentDate.getMinutes();

    let timeStamp = new Date(dateInput);
    let day = timeStamp.getDate();
    let month = timeStamp.getMonth() + 1;
    let year = timeStamp.getFullYear();
    let hour = timeStamp.getHours();
	let minute = timeStamp.getMinutes(); 

    if(year === currentYear && month === currentMonth && day === currentDay && hour === currentHour && minute === currentMinute){
        return 'Now';
  } else if(year === currentYear && month === currentMonth && day === currentDay && hour === currentHour){
      return currentMinute - minute === 1 ? '1 minute ago' : `${currentMinute-minute} minutes ago`
    } else if(year === currentYear && month === currentMonth && day === currentDay && currentHour - hour === 1 ){
      return `last hour`;
    } else if(year === currentYear && month === currentMonth && day === currentDay){
      return `Today`;
    } else if(year === currentYear && month === currentMonth && currentDay - day === 1){
        return 'Yesterday';
  } else if(year === currentYear && month === currentMonth && currentDay - day > 1 && currentDay - day < 7){
        return `${currentDay - day} days ago`;
  } else{
      if(`${day}`.length < 2) day = `0${day}`;
      if(`${month}`.length < 2) month = `0${month}`;
  
      return `${month}/${day}/${year}`
  }
}