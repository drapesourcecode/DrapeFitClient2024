import React, { useState } from 'react';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import NavTabs from 'views/client/component/profile/NavTabs';
import { Button, Divider } from '@mui/material';

const CalendarSchedule = () => {
  const [date, setDate] = useState(dayjs(new Date().toString()));
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <NavTabs />
      <Divider />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CalendarPicker onChange={(newDate) => setDate(newDate)} date={date} />
        <div className="fit-schedule-period">
          {['EVERY MONTH', 'EVERY 2 MONTH', 'EVERY 3 MONTH'].map((val, ind) => (
            <div key={ind} className={selected === ind ? 'selected' : ''} onClick={() => setSelected(ind)}>
              {val}
            </div>
          ))}
        </div>
        <Button className="schedule-button">schedule your fit</Button>
      </LocalizationProvider>
    </div>
  );
};

export default CalendarSchedule;
