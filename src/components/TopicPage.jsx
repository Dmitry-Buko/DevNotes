import CodeBlock from "./CodeBlock";
import { topics } from "../data/topic";

const TopicPage = ({ id }) => {
  const topic = topics.find((item) => item.id === id);
  return (
    <div className="topic-page">
      <h1>
        {topic.emoji}{topic.title}
      </h1>
      <div className="content">
        {topic.content.map((item, index) => {
          switch (item.type) {
            case "p":
              return (
                <p key={index} className="topic-paragraph">
                  {item.text}
                </p>
              );
            case "h":
              return (
                <h3 key={index} className="topic-title">
                  {item.text}
                </h3>
              );
            case "c":
              return <CodeBlock key={index} code={item.code}/>
            case "w":
              return (
                <div key={index} className="topic-warning">
                  ⚠️<strong>Важно: </strong>{item.text}
                </div>
              );
            case "l":
              return (
                <ul key={index} className="topic-list">
                  {item.items.map(list => <li>{list}</li>)}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default TopicPage;
