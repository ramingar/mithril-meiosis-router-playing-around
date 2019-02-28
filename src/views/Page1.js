import m from 'mithril'
import Navigator from '../components/Navigator'

const Page1 = ({attrs}) => {
    const {state, actions} = attrs;
    let myText             = {...state}.text1;
    const changeText       = e => myText = e.target.value;

    const view = () => {
        return (
            <div>
                <Navigator/>
                <main>
                    <h1>This is the Page1</h1>
                    <input onkeyup={changeText} value={myText}/>
                    <button onclick={actions.setText1(myText)}>Save</button>
                </main>
            </div>
        )
    };

    return {view}
};

export default Page1