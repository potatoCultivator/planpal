import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import {
  Button,
  CalendarNav,
  CalendarToday,
  Eventcalendar,
  getJson,
  Segmented,
  SegmentedGroup,
  setOptions,
} from '@mobiscroll/react';
import { useCallback, useEffect, useState } from 'react';

setOptions({
  theme: 'ios',
  themeVariant: 'light'
});

function App() {
  const [view, setView] = useState('schedule');
  const [myEvents, setEvents] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calView, setCalView] = useState({
    schedule: {
      type: 'week',
    },
  });


  return(
    <Eventcalendar 
      className="md-custom-header"
      view={calView}
    />
  );
}

export default App;