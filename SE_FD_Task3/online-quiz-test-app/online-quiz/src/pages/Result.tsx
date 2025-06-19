//pages/Result.tsx

import { useLocation, Link } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">Quiz Completed!</h1>
      <p className="mt-4 text-xl">
        Your Score:{score}/{total}
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded"
      >
        Try Again
      </Link>
    </div>
  );
};
export default Result;
