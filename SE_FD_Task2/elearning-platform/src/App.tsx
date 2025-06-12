import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Layout from "./components/Layout";

function App() {
  return (
    <>
     <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      </Layout>
    </>
  );
}

export default App;
