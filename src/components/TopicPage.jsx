import CodeBlock from "./CodeBlock";

const TopicPage = ({ topic }) => {
  return (
    <div className="topic-page">
      <h1 className="topic-page__main-title">
        {topic.emoji}
        {topic.title}
      </h1>
      <div className="topic-page__wrap">
        {topic.content.map((item, index) => {
          switch (item.type) {
            case "p":
              return (
                <p key={index} className="topic-page__text">
                  {item.text}
                </p>
              );
            case "h":
              return (
                <h3 key={index} className="topic-page__subtitle">
                  {item.text}
                </h3>
              );
            case "c":
              return <CodeBlock key={index} code={item.code} />;
            case "w":
              return (
                <p key={index} className="topic-page__warning">
                  ⚠️<strong>Важно: </strong>
                  {item.text}
                </p>
              );
            case "l":
              return (
                <ul key={index} className="topic-page__list">
                  {item.items.map((list, subIndex) => (
                    <li key={subIndex}>{list}</li>
                  ))}
                </ul>
              );
            case "doc":
              return (
                <div className="topic-page__doc-link-wrap">
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    className="topic-page__doc-link"
                  >
                    {item.text} →
                  </a>
                </div>
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
