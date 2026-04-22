import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import { topics } from "../data/topic";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/layout');
  };
  return (
    <div>
      <h1>Конспект по React</h1>
      <button onClick={handleClick}>Перейти к темам</button>
      <p>Или выбери тему, чтобы быстро повторить материал:</p>
      <div className="topics-list">
        {topics.map((topic) => (
          <Link key={topic.id} to={topic.id} className="topic-card">
            <p>{topic.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
