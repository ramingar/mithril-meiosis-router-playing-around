import m from 'mithril'
import Page1 from "./views/Page1";
import Page2 from "./views/Page2";

m.route.prefix('');

m.route(document.querySelector('#app'), '/page1', {
    '/page1': Page1,
    '/page2': Page2
});