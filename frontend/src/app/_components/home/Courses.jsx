import React from 'react';
import Badge from '../ui/Badge';

const Courses = () => {
  return (
    <div className="bg-slate-100">
      <div className="cus-container py-20">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <Badge className="bg-indigo-100 text-indigo-500">
            Top Class Courses
          </Badge>
          <h2 className="font-extrabold">Explore Our Best Courses</h2>
        </div>
      </div>
    </div>
  );
};

export default Courses;
