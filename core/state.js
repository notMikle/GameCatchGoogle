const _state = {
    gridSize: {
        columns: 4,
        rows: 4,
    },
    points: {
        googlePoints: 10,
        playerPoints: [1, 2]
    },
    positions: {
        google: {
            x: 2, y: 2
        },
        players: [{x: 3, y: 3}, {x: 2, y: 1}],
    }
}

let _observers = []

export function subscribe(observer) {
    _observers.push(observer)
}
export function unsubscribe(observer) {
    _observers = _observers.filter(O=>O!==observer)
}
function _notifyObservers() {
    _observers.forEach(O=>O())
}

setInterval(()=>{
    _state.positions.google={x: 2, y: 3}
    _state.points.googlePoints++
    _notifyObservers()
}, 2000)

export const getGooglePoints = async () => _state.points.googlePoints
export const getPlayerPoints = async (playerNumber) => {
    const playerIndex = playerNumber - 1
    if (playerIndex < 0 || playerIndex > _state.points.playerPoints.length - 1) {
        throw Error(`Invalid playerIndex: ${playerIndex}`)
    }
    return _state.points.playerPoints[playerIndex]
}

export async function getGridSize() {
    return {..._state.gridSize}
}

export async function getGooglePosition() {
    return {..._state.positions.google}
}

export async function getPlayerPosition(playerNumber) {
    const playerIndex = playerNumber - 1
    if (playerIndex < 0 || playerIndex > _state.points.playerPoints.length - 1) {
        throw Error(`Invalid playerIndex: ${playerIndex}`)
    }
    return {..._state.positions.players[playerIndex]}
}