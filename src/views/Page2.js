import m from 'mithril'
import Navigator from '../components/Navigator'

const Page2 = ({attrs}) => {
    const {actions, state} = attrs;
    let myText             = Object.assign({}, state).text2;
    const changeText       = e => myText = e.target.value;

    const view = () => {
        return (
            <div>
                <Navigator/>
                <main>
                    <h1>This is the Page2</h1>
                    <input onkeyup={changeText} value={myText}/>
                    <button onclick={actions.setText2(myText)}>Save</button>
                </main>
            </div>
        )
    };

    return {view}
};

export default Page2