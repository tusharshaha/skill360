import Navbar from './_components/ui/Navbar';
import Header from './_components/home/Header';
import Newsletter from './_components/home/Newsletter';
import Footer from './_components/ui/Footer';
import Instractor from './_components/home/Instractor';
import CourseCategory from './_components/home/CourseCategory';
import Courses from './_components/home/Courses';

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <CourseCategory></CourseCategory>
      <Courses></Courses>
      <Instractor></Instractor>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}
