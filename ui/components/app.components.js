import {GridComponents} from "./Grid/Grid.components.js";
import {SettingComponents} from "./Settings/Settings.components.js";
import {ResultComponents} from "./ResultPanel/Result.components.js";

export function AppComponents(){
    debugger
    const element = document.createElement('div')
    const gridElement = GridComponents()
    const settingElement = SettingComponents()
    const resultElement = ResultComponents()

    element.append(settingElement, resultElement, gridElement)
    return element
}