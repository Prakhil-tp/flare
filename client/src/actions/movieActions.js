import { HttpService } from 'util/services.js';
import { 
  FETCH_FAVORITE, 
  FETCH_POPULAR,
  FETCH_TRENDING,
  FETCH_WATCHED,
  FETCH_WATCHLATER, 
} from './types';

const httpService = HttpService();

//get favorite movies
export const fetchFavorite = () => dispatch => {
  const promise = httpService.get('/favorite');
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(movies=>dispatch({
    type:FETCH_FAVORITE,
    payload:movies
  }))
  .catch(err => {
    if (typeof err.message !== 'undefined') 
      console.log(err.message);
  });

}

//get popular movies
export const fetchPopular = () => dispatch => {
  const promise = httpService.get('/popular');
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(movies=>dispatch({
    type:FETCH_POPULAR,
    payload:movies
  }))
  .catch(err => {
    if (typeof err.message !== 'undefined') 
      console.log(err.message);
  });
  
}

//get watched movies
export const fetchWatched = () => dispatch => {
  const promise = httpService.get('/watched');
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(movies=>dispatch({
    type:FETCH_WATCHED,
    payload:movies
  }))
  .catch(err => {
    if (typeof err.message !== 'undefined') 
      console.log(err.message);
  });
}

//get watchlater movies
export const fetchWatchLater = () => dispatch => {
  const promise = httpService.get('/watchlater');
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(movies=>dispatch({
    type:FETCH_WATCHLATER,
    payload:movies
  }))
  .catch(err => {
    if (typeof err.message !== 'undefined') 
      console.log(err.message);
  });
}

// get trending movies
export const fetchTrending = () => dispatch => {
  const promise = httpService.get('/trending');
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(movies=>dispatch({
    type:FETCH_TRENDING,
    payload:movies
  }))
  .catch(err => {
    if (typeof err.message !== 'undefined') 
      console.log(err.message);
  });
}