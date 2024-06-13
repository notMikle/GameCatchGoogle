const _state = {
    points:{
        googlePoints: 10,
        playerPoints: [1, 2]
    }
}

export const getGooglePoints  = () => _state.points.googlePoints
export const getPlayerPoints  = (number) => _state.points.playerPoints[number]