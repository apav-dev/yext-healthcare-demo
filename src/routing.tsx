import {
  State,
  SearchActions,
  SelectableStaticFilter,
  Matcher,
} from "@yext/search-headless-react";

export interface Router {
  stateToRoute: (state: State) => URLSearchParams;
  routeToState: (params: URLSearchParams, actions: SearchActions) => void;
}

export const defaultRouter: Router = {
  stateToRoute: (state) => {
    const params = new URLSearchParams({});

    if (state.query.input) {
      params.set("query", state.query.input);
    }

    if (state.filters.static) {
      state.filters.static.forEach((sf) => {
        if (sf.selected) {
          // prefixed with sf_ to indicate that it is a static filter
          params.set(`sf_${sf.filter.fieldId}`, sf.filter.value);
        }
      });
    }

    // TODO: Facets
    // TODO: Pagination
    // TODO: Sort

    return params;
  },
  routeToState: (params, actions) => {
    //if search is in the route
    const route = window.location.pathname;
    const query = params.get("query");
    if (query) {
      actions.setQuery(query);
    }

    if (route === "/search") {
      const verticalKey = params.get("verticalKey");
      if (verticalKey) {
        actions.setVertical(verticalKey);
        // actions.executeVerticalQuery();
      } else {
        actions.setUniversal();
        // actions.executeUniversalQuery();
      }
    } else {
      //grab the search params from the url
      const searchParams = new URLSearchParams(window.location.search);
      const filtersFromUrl: SelectableStaticFilter[] = [];
      // set each as a fieldValue static filter
      searchParams.forEach((value, key) => {
        if (!key.includes("sf_")) return;
        const filterKey = key.replace("sf_", "");
        const locationDisplayName = searchParams.get("locationDisplayName");
        const displayName =
          filterKey !== "builtin.location"
            ? getFilterDisplayName(value)
            : locationDisplayName
            ? locationDisplayName
            : value;
        filtersFromUrl.push({
          selected: true,
          displayName,
          filter: {
            kind: "fieldValue",
            matcher: Matcher.Equals,
            fieldId: filterKey,
            value,
          },
        });
      });
      if (filtersFromUrl.length > 0) {
        actions.setStaticFilters(filtersFromUrl);
      }
      // if (query || filtersFromUrl.length > 0) {
      //   actions.executeVerticalQuery();
      // }
    }
  },
};

const getFilterDisplayName = (filterValue: string) => {
  // remove spaces and capitalize first letter of each word
  return filterValue
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};
