import { createStore } from "easy-peasy";
import { action, thunk } from "easy-peasy";
import axios from "axios";

const store = createStore({
  list: null,
  listLength: null,
  status: false,
  saveBuisnesses: action((state, payload) => {
    state.list = payload;
  }),
  setStatus: action((state, payload) => {
    state.status = payload;
  }),
  setLength: action((state, payload) => {
    state.listLength = payload;
  }),

  fetchBuisnesses: thunk(async (actions, payload) => {
    console.log("payload", payload);
    actions.setStatus(false);
    const { data } = await axios.get(
      `https://staging.admin.haavoo.com/api/business?city=${payload.city}&area=${payload.areas}&search_query=${payload.search_query}&page=${payload.page}&type=${payload.type}&category=${payload.categories}&sort=${payload.sort}&lat=19.1102976&lng=72.8793088`
    );
    actions.saveBuisnesses(data?.data?.data);
    actions.setLength(data?.data?.total);
    actions.setStatus(true);
  }),

  dealslist: null,
  saveDeals: action((state, payload) => {
    state.dealslist = payload;
  }),
  fetchDeals: thunk(async (actions, payload) => {
    console.log("payload", payload);
    actions.setStatus(false);
    const { data } = await axios.get(
      `https://staging.admin.haavoo.com/api/deals?city=ernakulam&area=${payload.areas}&query=${payload.search_query}&page=1&type=${payload.type}&category=${payload.categories}&sort=${payload.sort}&pageSize=`
    );
    actions.saveDeals(data?.data?.data);
    actions.setLength(data?.data?.total);
    actions.setStatus({ status: true });
  }),
});

export default store;
