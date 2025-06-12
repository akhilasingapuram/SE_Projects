import CourseCard from "../components/CourseCard";
import ReactImage from "../assets/react.svg";
import TypeScriptImage from "../assets/typescript.png";

const Courses = () => {
  return (
    <div>
      <CourseCard
        title="React Basics"
        description="Learn React from scratch."
        image={ReactImage}
        VideoUrl="https://www.youtube.com/embed/s2skans2dP4"
      />
      <CourseCard
        title="TypeScript Essentials"
        description="Master TypeScript for scalable apps."
        image={TypeScriptImage}
        VideoUrl="https://www.youtube.com/embed/ahCwqrYpIuM"
      />
    </div>
  );
};
export default Courses;
