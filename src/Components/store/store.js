import { createStore } from "easy-peasy";
import { action, thunk } from "easy-peasy";
import axios from "axios";

const store = createStore({
  list: null,
  saveBuisnesses: action((state, payload) => {
    state.list = payload;
  }),
  fetchBuisnesses: thunk(async (actions, payload) => {
    console.log("payload", payload);
    const { data } = await axios.get(
      `https://staging.admin.haavoo.com/api/business?city=ernakulam&area=${payload.areas.join()}&search_query=${
        payload.search_query
      }&page=1&type=${
        payload.type
      }&category=${payload.categories.join()}&sort=&lat=19.1168512&lng=72.8858624`
    );
    actions.saveBuisnesses(data?.data?.data);
  }),

  dealslist: null,
  saveDeals: action((state, payload) => {
    state.dealslist = payload;
  }),
  fetchDeals: thunk(async (actions, payload) => {
    console.log("payload", payload);
    const { data } = await axios.get(
      `https://staging.admin.haavoo.com/api/deals?city=&area=&query=&page=1&type=&category=${payload.categories.join()}&sort=&pageSize=`
    );
    actions.saveDeals(data?.data?.data);
  }),
});

export default store;
