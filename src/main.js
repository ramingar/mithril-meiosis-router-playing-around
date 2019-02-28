import m from 'mithril'
import Page1 from "./views/Page1";
import Page2 from "./views/Page2";
import {actions, states} from "./meiosis";

m.route(document.querySelector('#app'), '/page1', {
    '/page1': {
        render: () => m(Page1, {state: states(), actions}),
    },
    '/page2': {
        render: () => m(Page2, {state: states(), actions}),
    }
});