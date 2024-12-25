'use client';
import React from 'react';

const Tab = () => {
  const [activeTab, setActiveTab] = React.useState('all');

  const tabs = [
    { label: 'All Course', value: 'all' },
    { label: 'Freelance', value: 'freelance' },
    { label: 'Bundle', value: 'bundle' },
    { label: 'Language', value: 'language' }
  ];
  const handleTabChange = (tab) => setActiveTab(tab);
  return (
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
  );
};

export default Tab;
