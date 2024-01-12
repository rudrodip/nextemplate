const Loading = () => {
  return (
    <div className="w-full min-h-screen flex-center">
      <LoadSpinner />
    </div>
  );
};

export default Loading;

import "@/styles/loader.css";

const LoadSpinner = () => {
  return (
    <div className="w-32 h-32 flex-center">
      <div className="loader"></div>
    </div>
  );
};
