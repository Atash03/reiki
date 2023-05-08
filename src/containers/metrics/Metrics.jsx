import React from 'react';
import './metrics.css';

function Metrics() {
  return (
    <div className='reiki__metrics section__padding'>
      <div className='reiki__metrics-content'>
        <div className='reiki__metrics-content_date'>
          <h1>Sunday, 19th March</h1>
          <p>🇬🇧 UK 6pm 🇺🇸 US 10:00 am PST / 11:00 am MT / 12:00 noon CT/ 1:00 pm ET </p>
          <button>Add to Calendar</button>
        </div>
        <div className='reiki__metrics-content_meeting'>
          <h1>Online on Zoom</h1>
          <p>Link will be shared before the event</p>
        </div>
      </div>
    </div>
  )
}

export default Metrics;