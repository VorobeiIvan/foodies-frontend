import Container from "../../components/layout/Container/Container";

import {
  useGetAreasQuery,
  useGetIngredientsQuery,
  useGetTestimonialsQuery,
} from "../../redux/";

const Home = () => {
  // TODO: Delete this
  // INFO: How to retrieve data from requests
  const {
    data: ingredientsData,
    isFetching: ingredientsIsFetching,
    isLoading: ingredientsIsLoading,
    isError: ingredientsIsError,
  } = useGetIngredientsQuery();

  const {
    data: areasData,
    isFetching: areasIsFetching,
    isLoading: areasIsLoading,
    isError: areasIsError,
  } = useGetAreasQuery();

  const {
    data: testimonialsData,
    isFetching: testimonialsIsFetching,
    isLoading: testimonialsIsLoading,
    isError: testimonialsIsError,
  } = useGetTestimonialsQuery();

  console.log({
    ingredientsData: {
      ingredientsIsLoading,
      ingredientsIsFetching,
      ingredientsData,
      ingredientsIsError,
    },
    testimonialsData: {
      testimonialsIsLoading,
      testimonialsIsFetching,
      testimonialsData,
      testimonialsIsError,
    },
    areasData: {
      areasIsLoading,
      areasIsFetching,
      areasData,
      areasIsError,
    },
  });
  return (
    <>
      <Container wide>Hero section</Container>
      <Container>Categories</Container>
    </>
  );
};

export default Home;
