import "./App.css";
import { Route, Routes } from "react-router-dom";
import TopicPage from "./components/TopicPage";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { topics } from "./data/topic";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layout" element={<Layout />}>
          {topics.map((topic) => (
            <Route
              key={topic.id}
              path={topic.path}
              element={<TopicPage topic={topic} />}
            />
          ))}
        </Route>
      </Routes>
    </>
    // <Home />
    // <TopicPage id={'props'}/>
  );
}

export default App;
