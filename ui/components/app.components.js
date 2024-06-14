import {GridComponents} from "./Grid/Grid.components.js";
import {SettingComponents} from "./Settings/Settings.components.js";
import {ResultComponents} from "./ResultPanel/Result.components.js";

export function AppComponents(){
    debugger
    const element = document.createElement('div')
    render(element)
    return {element}
}
async function render(element){
    const gridComponent = GridComponents()
    const settingComponent = SettingComponents()
    const resultComponent = ResultComponents()

    element.append(settingComponent.element, resultComponent.element, gridComponent.element)
}