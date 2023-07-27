import { useEffect } from "react";
import { cloneDeep } from "lodash";
import {
  SearchActions,
  SearchHeadless,
  SearchHeadlessProvider,
  State,
} from "@yext/search-headless-react";
import { useSearchActions } from "@yext/search-headless-react";

export interface HeadlessProviderProps {
  searcher: SearchHeadless;
  routing: {
    stateToRoute: (state: State) => URLSearchParams;
    routeToState: (params: URLSearchParams, actions: SearchActions) => void;
  };
  children: React.ReactNode;
}

type InternalRouterProps = Omit<HeadlessProviderProps, "searcher">;

// This is a separate component so that you can useContext()
const InternalRouter = ({
  routing,
  children,
}: InternalRouterProps): JSX.Element => {
  const searchActions = useSearchActions();

  // Fetch the URL params when the page loads, but not after that
  useEffect(() => {
    if (routing) {
      const { routeToState } = routing;
      const params = new URLSearchParams(window.location.search);
      routeToState(params, searchActions);
      searchActions.executeVerticalQuery();
    }
  }, []);

  return <>{children}</>;
};

const HeadlessProvider = ({
  searcher,
  routing,
  children,
}: HeadlessProviderProps): JSX.Element => {
  const newSearcher = cloneDeep(searcher);

  // map the most recent search to the URL when a search is executed
  const { stateToRoute } = routing;
  newSearcher.executeVerticalQuery = async () => {
    const params = stateToRoute(searcher.state);
    window.history.pushState({}, "", `?${params.toString()}`);

    return searcher.executeVerticalQuery();
  };

  return (
    <SearchHeadlessProvider searcher={newSearcher}>
      <InternalRouter routing={routing}>{children}</InternalRouter>
    </SearchHeadlessProvider>
  );
};

export default HeadlessProvider;
