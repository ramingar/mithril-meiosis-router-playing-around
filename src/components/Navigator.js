import m from 'mithril'

const view = () => {
    return (
        <nav>
            <a href="/page1">Page 1</a>
            |
            <a href="/page2">Page 2</a>
        </nav>
    );
};

const Navigator = {
    view
};

export default Navigator