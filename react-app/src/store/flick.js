const ALL_FLICKS = 'flick/ALL_FLICKS';
const GET_FLICK = 'flick/GET_FLICK';
const SEARCH_FLICK = 'flick/SEARCH_FLICK';
const GET_MOVIES = 'flick/GET_MOVIES';
const GET_TV = 'flick/GET_TV';


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

const allMovies = (movies) => {
    return {
        type: GET_MOVIES,
        movies
    }
}

const allTV = (tv) => {
    return {
        type: GET_TV,
        tv
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

export const getAllMoviesThunk = () => async (dispatch) => {
    const response = await fetch("/api/flick/movies");

    if (response.ok) {
        const movies = await response.json();
        dispatch(allMovies(movies));
    }
}

export const getAllShowsThunk = () => async (dispatch) => {
    const response = await fetch("/api/flick/tv");

    if (response.ok) {
        const tv = await response.json();
        dispatch(allTV(tv));
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
            if (action.flick.flick === 'Title does not exist') {
                return newState[action.flick] = action.flick
            }
            action.flick.flick.forEach((flick, i) => {
                newState[flick.id] = flick
            })
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
        case GET_MOVIES: {
            const newState = {};
            action.movies.movie.forEach(movie => {
                newState[movie.id] = movie
            })
            return newState
        }
        case GET_TV: {
            const newState = {};
            action.tv.tv.forEach(show => {
                newState[show.id] = show
            })
            return newState
        }
        default:
            return state
    }
}

export default flickReducer
