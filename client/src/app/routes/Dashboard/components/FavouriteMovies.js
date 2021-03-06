import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes, { shape } from 'prop-types'
import shortid from 'shortid'
import { fetchFavourite } from 'actions/movieActions'
import MovieCard from 'components/MovieCard'
import CardArea from 'components/CardArea'

class FavouriteMovies extends Component{

  nextPage = () => {
    const { current_page, total_page, fetchFavourite } = this.props;
    if (current_page < total_page) 
      fetchFavourite(current_page+1)   
  }
  prevPage = () => {
    const { current_page, fetchFavourite } = this.props;
    if (current_page > 1) 
      fetchFavourite(current_page-1)   
  }

  render(){
    const { Movies, total_page, current_page } = this.props;

    if(Movies.length > 0){
      return (
        <CardArea
          title="FAVOURITE MOVIES"
          nextPage={this.nextPage}
          prevPage={this.prevPage}
          total_page={total_page}
          current_page={current_page}
        >
          {
            Movies.slice(0,8).map(Movie=>(
              <MovieCard
                key={shortid.generate()}
                title={Movie.movie.title}
                poster={Movie.movie.poster}
                genre={Movie.movie.genres[0]&&Movie.movie.genres[0].genre.toUpperCase()}              
                favourite={Movie.movie.favourite}
                watch_later={Movie.movie.watch_later}
                watched={Movie.movie.watched}
                rating={Movie.movie.rating}
                hooq={Movie.movie.on_hooq}
                allDetails={Movie}
                cardArea='favourite'
                transition={Movie.movie.transition}
              />
            ))
          }
        </CardArea>
      )
    }
    return null
  }
}


const mapStateToProps = state => ({
  Movies: state.Movies.favouriteMovies,
  current_page: state.Movies.favouriteCurrentPage,
  total_page: state.Movies.favouriteTotalPage,
})

const mapDispatchToProps = { fetchFavourite }

FavouriteMovies.defaultProps = {
  Movies:[{title:''},]
}

FavouriteMovies.propTypes = {
  Movies: PropTypes.arrayOf(
    shape({
      title:PropTypes.string,
      poster:PropTypes.node,
      genre:PropTypes.string,
      rating:PropTypes.number
    })
    ),
    current_page: PropTypes.number.isRequired,
    total_page: PropTypes.number.isRequired,
    fetchFavourite: PropTypes.func.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(FavouriteMovies)

