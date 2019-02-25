import m from 'mithril'
import Navigator from '../components/Navigator'

const view = () => {
    return (
        <div>
            <Navigator/>
            <main>
                <h1>This is the Page1</h1>
            </main>
        </div>
    )
};

const Page1 = {
    view
};

export default Page1