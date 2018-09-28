import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes, { shape } from 'prop-types'
import shortid from 'shortid'
import { fetchRecommend } from 'actions/movieActions'
import MovieCard from 'components/MovieCard'
import CardArea from 'components/CardArea'

class Recommendation extends Component{

  changePage = () => {
    const { current_page, total_page, fetchRecommend } = this.props;
    if (current_page < total_page) 
      fetchRecommend(current_page+1);   
  }

  render(){
    const { Movies } = this.props;

    if(Movies.length > 0){
      return (
        <CardArea title="RECOMMENDED MOVIES" changePage={this.changePage}>
          {
            Movies.map(Movie=>(
              <MovieCard
                key={shortid.generate()}
                title={Movie.movie.title}
                poster={Movie.movie.poster}
                genre={Movie.movie.genres[0]&&Movie.movie.genres[0].genre.toUpperCase()}              
                favourite={Movie.movie.favourite}
                watch_later={Movie.movie.watch_later}
                watched={Movie.movie.watched}
                rating={Movie.movie.rating}
                allDetails={Movie}
                cardArea='recommendation'
              />
            ))
          }
        </CardArea>
      )
    }
    return <div />
  }
}


const mapStateToProps = state => ({
  Movies: state.Movies.recommendedMovies,
  current_page: state.Movies.recommendedCurrentPage,
  total_page: state.Movies.recommendedTotalPage,
})

const mapDispatchToProps = { fetchRecommend }

Recommendation.defaultProps = {
  Movies:[{title:''},]
}

Recommendation.propTypes = {
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
    fetchRecommend: PropTypes.func.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(Recommendation)

