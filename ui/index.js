import {AppComponents} from "./components/app.components.js";
import {subscribe, unsubscribe} from "../core/state.js";

const rootElement = document.getElementById('root')

function renderApp(){
    rootElement.innerHTML=''
    rootElement.append(AppComponents().element)
}
renderApp()

subscribe(renderApp)
