import {getGooglePosition, getPlayerPosition} from "../../../../core/state.js";
import {GoogleComponent} from "../../common/Google/Google.component.js";
import {PlayerComponent} from "../../common/Player/Player.component.js";

export function CellComponent(x, y) {
    const element = document.createElement('td')
    render(element, x, y)
    return {element};
}
async function render(element, x, y) {
    const googlePosition = await getGooglePosition()
    if(googlePosition.x === x && googlePosition.y === y){
        element.append(GoogleComponent().element)
    }
    const player1Position = await getPlayerPosition(1)
    if(player1Position.x === x && player1Position.y === y){
        element.append(PlayerComponent(1).element)
    }
    const player2Position = await getPlayerPosition(2)
    if(player2Position.x === x && player2Position.y === y){
        element.append(PlayerComponent(2).element)
    }
}