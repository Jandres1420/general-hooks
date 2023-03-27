import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoadin, hasError } = useFetch(
    "https://rickandmortyapi.com/api/character/?count=1"
  );

  console.log(data, isLoadin, hasError);
  return (
    <>
      <h1> Multiple Customs hooks </h1>
    </>
  );
};
