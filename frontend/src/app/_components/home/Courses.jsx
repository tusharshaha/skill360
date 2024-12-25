import React from 'react';
import Badge from '../ui/Badge';
import Tab from '../ui/Tab';

const getCourseData = async () => {
  try {
    const res = await fetch('/data.json');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const Courses = async () => {
  const courseData = await getCourseData();
  console.log(courseData)
  return (
    <div className="bg-slate-100">
      <div className="cus-container py-20">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <Badge className="bg-indigo-100 text-indigo-500">
            Top Class Courses
          </Badge>
          <h2 className="font-extrabold">Explore Our Best Courses</h2>

          <div className="max-w-3xl border-b-indigo-200 border-b-4 mx-auto flex items-center justify-center pt-10">
            <Tab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
