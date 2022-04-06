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
      `https://staging.admin.haavoo.com/api/business?city=&area=&search_query=&page=1&type=&category=&sort=&lat=19.1168512&lng=72.8858624`
    );
    actions.saveBuisnesses(data?.data?.data);
  }),

  // fetchSearchBuisnesses : action((payload) => {
  //   state.list = state.list.filter();
  // }),
  fetchSearchBuisnesses: thunk(async (actions, payload) => {
    const { data } = await axios.get(
      `https://staging.admin.haavoo.com/api/business?search_query=${payload}`
    );
    actions.saveBuisnesses(data?.data?.data);
  }),
  // fetchCategories: thunk(async (actions, payload) => {
  //   const { data } = await axios.get(
  //     `https://staging.admin.haavoo.com/api/business?category=${payload}`
  //   );
  //   actions.saveBuisnesses(data?.data?.data);
  // }),
  fetchAreas: thunk(async (actions, payload) => {
    const { data } = await axios.get(
      `https://staging.admin.haavoo.com/api/business?area=${payload}`
    );
    actions.saveBuisnesses(data?.data?.data);
  }),
});

export default store;
