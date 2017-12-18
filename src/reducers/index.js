import { combineReducers } from 'redux'
import movieDetails from './movieDetails'
import castDetails from './castDetails'
import newTitles from './newTitles'

const rootReducer = combineReducers({
    movieDetails,
    castDetails,
    newTitles
})

export default rootReducer