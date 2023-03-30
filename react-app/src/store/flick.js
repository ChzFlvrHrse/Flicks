const ALL_FLICKS = 'flick/ALL_FLICKS'
const GET_FLICK = 'flick/GET_FLICK'
const SEARCH_FLICK = 'flick/SEARCH_FLICK'

const allFlicks = (flicks) => {
    return {
        type: ALL_FLICKS,
        flicks
    }
}

const oneFlick = (flick) => {
    return {
        type: GET_FLICK,
        flick
    }
}

const searchFlick = (search) => {
    return {
        type: SEARCH_FLICK,
        search
    }
}

export const getAllFlicksThunk = () => async (dispatch) => {
    const response = await fetch("/api/flick/");

    if (response.ok) {
        const all = await response.json();
        dispatch(allFlicks(all));
    }
}

export const getOneFlickThunk = (title) => async (dispatch) => {
    const response = await fetch(`/api/flick/${title}`);

    if (response.ok) {
        const one = await response.json();
        dispatch(oneFlick(one));
    }
}

export const searchFlickThunk = (title) => async (dispatch) => {
    const response = await fetch(`/api/flick/${title}/search`);

    if (response.ok) {
        const searched = await response.json();
        dispatch(searchFlick(searched));
    }
}

const initialState = {}
const flickReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_FLICKS: {
            const newState = {};
            action.flicks.flicks.forEach(flick => {
                newState[flick.id] = flick
            })
            return newState
        }
        case GET_FLICK: {
            const newState = {};
            newState[action.flick.id] = action.flick
            return newState
        }
        case SEARCH_FLICK: {
            const newState = {};
            if (action.search.searched === 'Title does not exist') {
                return newState[action.search] = action.search
            }
            action.search.searched.forEach(flick => {
                newState[flick.id] = flick
            })
            return newState
        }
        default:
            return state
    }
}

export default flickReducer
