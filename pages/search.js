import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Search/Header/Header";
import SearchResults from "../components/Search/Results/SearchResults";

import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";

const Search = ({ results }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.query} - Google Search</title>
      </Head>
      <Header />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const useDummy = false;
  const startIndex = context.query.start || "0";
  const data = useDummy
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.query}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
