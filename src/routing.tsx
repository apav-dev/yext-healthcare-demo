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
    const query = params.get("query");
    if (query) {
      actions.setQuery(query);
    }

    //grab the search params from the url
    const searchParams = new URLSearchParams(window.location.search);
    const filtersFromUrl: SelectableStaticFilter[] = [];
    // set each as a fieldValue static filter
    searchParams.forEach((value, key) => {
      if (key === "query") return;
      filtersFromUrl.push({
        selected: true,
        filter: {
          kind: "fieldValue",
          matcher: Matcher.Equals,
          fieldId: key.replace("sf_", ""),
          value,
        },
      });
    });
    if (filtersFromUrl.length > 0) {
      actions.setStaticFilters(filtersFromUrl);
    }
    if (query || filtersFromUrl.length > 0) {
      actions.executeVerticalQuery();
    }
  },
};
