import './App.css';
import { useState } from 'react';
import SideMenu from './components/Sidemenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Dashboard = () => {
  return <h2>Dashboard</h2>;
};
const Content = () => {
  return <h2>Content</h2>;
};
const Courses = () => {
  return <h2>Content/Courses</h2>;
};
const Videos = () => {
  return <h2>Content/Videos</h2>;
};
const Design = () => {
  return <h2>Design</h2>;
};

function App() {

    const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }} />
        <div className={`container ${inactive ? "inactive" : " "} `}>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/content" element={<Content />} />
            <Route path="/content/courses" element={<Courses />} />
            <Route path="/content/videos" element={<Videos />} />
            <Route exact path="/content/design" element={<Design />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
