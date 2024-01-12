import "./card.css";

export default function Main() {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="card">
        <div className="card-content">
          <h3 className="primary-gradient text-5xl font-bold">NexTemplate</h3>
          <h1 className="text-xl text-center">
            Example of Accent Shard effect on hover made with nextjs and
            tailwindcss
          </h1>
          <p className="text-base">
            This component is taken from a codepen made by Hyperplexed. Here is
            the link to the original codepen:{" "}
            <a
              href="https://codepen.io/Hyperplexed/pen/qBMYVoq"
              target="_blank"
              className="text-blue-500"
            >
              Accent Shard
            </a>
            . Youtube channel of hyperplexed:{" "}
            <a
              href="https://www.youtube.com/@Hyperplexed"
              target="_blank"
              className="text-blue-500"
            >
              Hyperplexed
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
