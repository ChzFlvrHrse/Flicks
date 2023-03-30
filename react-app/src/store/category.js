const ALL_CATEGORIES = 'category/ALL_CATEGORIES'
const GET_CATEGORY = 'category/GET_CATEGORY'

const allCat = (categories) => {
    return {
        type: ALL_CATEGORIES,
        categories
    }
}

const oneCategory = (category) => {
    return {
        type: GET_CATEGORY,
        category
    }
}

export const getAllCategoriesThunk = () => async (dispatch) => {
    const response = await fetch("/api/category/")

    if (response.ok) {
        const all = await response.json();
        dispatch(allCat(all))
    }
}

export const getOneCategoryThunk = (categoryId) => async (dispatch) => {
    const response = await fetch(`/api/category/${categoryId}`)

    if (response.ok) {
        const one = await response.json();
        dispatch(oneCategory(one))
    }
}

const initialState = {}
const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_CATEGORIES: {
            const newState = {};
            action.categories.categories.forEach(cat => {
                newState[cat.name] = cat
            })
            return newState
        }
        case GET_CATEGORY: {
            const newState = {};
            action.category.flicks.forEach(cat => {
                newState[cat.id] = cat
            })
            return newState
        }
        default:
            return state
    }
}

export default categoryReducer
