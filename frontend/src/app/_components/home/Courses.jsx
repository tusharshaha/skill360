'use client';

import React from 'react';
import Badge from '../ui/Badge';
import Tab from '../ui/Tab';
import courses from '../../../../public/data.json';

const Courses = () => {
  const [activeTab, setActiveTab] = React.useState('all');
  const courseFiler = courses.filter(
    (ele) => ele.category === activeTab || true
  );
  const tabs = [
    { label: 'All Course', value: 'all' },
    { label: 'Freelance', value: 'freelance' },
    { label: 'Bundle', value: 'bundle' },
    { label: 'Language', value: 'language' }
  ];
  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <div className="bg-slate-100">
      <div className="cus-container py-20">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <Badge className="bg-indigo-100 text-indigo-500">
            Top Class Courses
          </Badge>
          <h2 className="font-extrabold">Explore Our Best Courses</h2>

          <div className="max-w-3xl border-b-indigo-200 border-b-4 mx-auto flex items-center justify-center pt-10">
            <ul className="flex items-center gap-6 mx-auto text-xl text-slate-500">
              {tabs.map((tab, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleTabChange(tab.value)}
                    className={`active-tab pb-4 ${activeTab === tab.value ? 'clicked text-black' : ''}`}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* filtered courses  */}
          <div className='mt-16'>
            {courseFiler.map((ele, i) => <span key={i}>{ele.title}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
