const _state = {
    gridSize: {
        columns: 4,
        rows: 4,
    },
    points: {
        googlePoints: 0,
        playerPoints: [1, 2],
        pointsToLoose: 5,
    },
    positions: {
        google: {
            x: 2, y: 2
        },
        players: [{x: 3, y: 3}, {x: 2, y: 1}],
    },
    googleJumpInterval: 2000,
}

let _observers = []

export function subscribe(observer) {
    _observers.push(observer)
}

export function unsubscribe(observer) {
    _observers = _observers.filter(O => O !== observer)
}

function _notifyObservers() {
    _observers.forEach(O => O())
}

function generateNewIntegerNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function jumpGoogleToNewPosition() {
    const newPosition = {..._state.positions.google}
    do {
        newPosition.x = generateNewIntegerNumber(0, _state.gridSize.columns - 1)
        newPosition.y = generateNewIntegerNumber(0, _state.gridSize.rows - 1)
        var isNewPositionMatchWithCurrentGooglePosition = newPosition.x === _state.positions.google.x && newPosition.y === _state.positions.google.y
        var isNewPositionMatchWithCurrentPlayer1Position = newPosition.x === _state.positions.players[0].x && newPosition.y === _state.positions.players[0].y
        var isNewPositionMatchWithCurrentPlayer2Position = newPosition.x === _state.positions.players[1].x && newPosition.y === _state.positions.players[1].y
    } while (isNewPositionMatchWithCurrentGooglePosition || isNewPositionMatchWithCurrentPlayer1Position || isNewPositionMatchWithCurrentPlayer2Position)
    _state.positions.google = newPosition
}
let googleJumpInterval
googleJumpInterval = setInterval(() => {
    _state.points.googlePoints++
    if(_state.points.googlePoints === _state.points.pointsToLoose){
        clearInterval(googleJumpInterval)
    }
    jumpGoogleToNewPosition()
    _notifyObservers()
}, _state.googleJumpInterval)

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