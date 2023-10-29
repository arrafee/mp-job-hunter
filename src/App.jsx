/* eslint-disable no-unused-vars */
import LandingPage from "./pages/LandingPage";
import DetailJob from "./pages/DetailJob";
import FindJobs from "./pages/FindJobs";
import Jobs from "./pages/Admin/Jobs/Jobs";
import { Navbar } from "./components/Navbar";
import AddJobs from "./pages/Admin/Jobs/AddJobs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import "./App.css";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/detail-job" element={<DetailJob />} />
          </Routes>
        </main>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/add-jobs" element={<AddJobs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
