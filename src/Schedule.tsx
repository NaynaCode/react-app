import './Schedule.css';

const Schedule = () => {
  const startTime = 8 * 60; // Starting time in minutes (8:00 AM = 8 * 60)
  const endTime = 12.5 * 60; // Ending time in minutes (12:30 PM = 12.5 * 60)

  const timeSlots: number[] = [];
  let currentTime = startTime;

  while (currentTime <= endTime) {
    timeSlots.push(currentTime);
    currentTime += 30; // Increment by 30 minutes
  }

  return (
    <div>
        <p></p>
      <div className="schedule-container">
        {timeSlots.map((timeSlot) => {
          const hours = Math.floor(timeSlot / 60);
          const minutes = timeSlot % 60;
          const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

          return (
            <div key={timeSlot} className="schedule-row">
              <div className="input-box">
                <input type="text" autoFocus={timeSlot === startTime} />
                <span className="unit">{formattedTime}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;



