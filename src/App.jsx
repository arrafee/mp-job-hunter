/* eslint-disable no-unused-vars */
import LandingPage from "./pages/LandingPage";
import DetailJob from "./pages/DetailJob";
import FindJobs from "./pages/FindJobs";
import Jobs from "./pages/Admin/Jobs/Jobs";
import { Navbar } from "./components/Navbar";
import AddJobs from "./pages/Admin/Jobs/AddJobs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditJobs from "./pages/Admin/Jobs/EditJob";
import { Provider } from "react-redux";
import store from "./redux/store/jobs";

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
        <Provider store={store}>
          <Routes>
            <Route path="/administrator/jobs" element={<Jobs />} />
            <Route path="/administrator/jobs/add-jobs" element={<AddJobs />} />
            <Route
              path="/administrator/jobs/edit-job/:id"
              element={<EditJobs />}
            />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
