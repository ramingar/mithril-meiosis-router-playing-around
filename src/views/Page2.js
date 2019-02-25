import m from 'mithril'
import Navigator from '../components/Navigator'

const view = () => {
    return (
        <div>
            <Navigator/>
            <main>
                <h1>This is the Page2</h1>
            </main>
        </div>
    )
};

const Page2 = {
    view
};

export default Page2