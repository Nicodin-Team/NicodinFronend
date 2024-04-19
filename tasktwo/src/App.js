import React from 'react';
import AnnouncementDetail from './AnnouncementDetail';

const announcementData = {
  title: 'Build a Website',
  description: 'Build a responsive website for our company.',
  deadline: 'May 1, 2024',
  budget: '$1000 - $1500',
  skills: ['React', 'HTML', 'CSS', 'JavaScript'],
  employer: 'John Doe'
};

function App() {
  return (
    <div className="App">
      <AnnouncementDetail announcement={announcementData} />
    </div>
  );
}

export default App;
