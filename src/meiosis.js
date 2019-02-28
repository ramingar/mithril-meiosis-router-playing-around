// Meiosis
import {P} from "patchinko";
import flyd from "flyd";
import {store} from "./store";

const update  = flyd.stream();
const state   = Object.assign({}, store.state);
const states  = flyd.scan(P, state, update);
const actions = store.actions(update);

export {states, state, actions}