import {getGooglePoints, getPlayerPoints} from "../../../core/state.js";

export function ResultComponents(){
    const element = document.createElement('div')
    const player1Points = getPlayerPoints(0)
    const player2Points = getPlayerPoints(1)
    const googlePoints = getGooglePoints()
    element.append(`Player1:${player1Points}, Player2:${player2Points}, Google:${googlePoints}`)
    return element
}