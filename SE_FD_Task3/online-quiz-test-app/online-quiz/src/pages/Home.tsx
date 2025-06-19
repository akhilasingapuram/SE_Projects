//pages/Home.tsx

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Quiz App</h1>
      <Link to="/quiz" className="bg-blue-600 text-white px-6 py-2 rounded">
        Start Quiz
      </Link>
    </div>
  );
};
export default Home;
