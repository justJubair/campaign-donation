import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="text-center">
        <h1 className="font-bold text-3xl mb-8">Oops!</h1>
        <p>Sorry, an unexpected error has occured</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default Error;
