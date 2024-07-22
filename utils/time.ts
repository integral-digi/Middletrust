const checkTime = (currentHour?: number) => {
    // Handle the case where currentHour is undefined.
    if (currentHour === undefined) {
      return "Day";
    }
  
    if (currentHour >= 1 && currentHour < 12) {
      return "Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };
  
  const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const currentHour = new Date().getHours(); // Get the current hour of the day
  
  export const timeOfDay = checkTime(currentHour);
  
  console.log(`In the time zone ${currentTimeZone}, it is currently ${timeOfDay}.`);