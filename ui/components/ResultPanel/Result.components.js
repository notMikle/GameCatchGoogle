import {getGooglePoints, getPlayerPoints} from "../../../core/state.js";

export function ResultComponents(){
    const element = document.createElement('div')
    element.classList.add('result')

    render(element)

    return {element}
}
async function render (element){
    const player1Points = await getPlayerPoints(1)
    const player2Points = await getPlayerPoints(2)
    const googlePoints = await getGooglePoints()
    element.append(`Player1:${player1Points}, Player2:${player2Points}, Google:${googlePoints}`)
}
