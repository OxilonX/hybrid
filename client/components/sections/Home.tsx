const Home = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center text-center space-y-2 mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-purple-500 dark:text-purple-400">
            AI-Powered Insights
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Analyze the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
              Sentiment
            </span>
          </h1>

          <p className="text-slate-500 dark:text-slate-400 max-w-prose">
            Enter your text below to see the emotional depth of your content in
            real-time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
