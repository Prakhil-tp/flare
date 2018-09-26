import React from 'react';
import { Divider, Grid, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const CardArea = (props) => {
  const { title, isLoading, children, changePage } = props;
    return(
      <div className="main">
        <Divider />
        <div className="title">
          <h4>{title}</h4>
        </div>
        {
          isLoading? 
            (
              <div className="loading-space">
                {children}
              </div>
            )
          :
            (
              <div className="card-space">
                <Grid container flex-direction="row" spacing={8}>
                  {children}
                </Grid>
                <Button 
                  variant="fab" 
                  style={{
                    position:'absolute',
                    bottom:'42%',
                    right:'5%'
                  }}
                  onClick={changePage}
                  color="primary"
                >
                  <i className="material-icons">arrow_right</i>
                </Button>
              </div>
            )
        }

        <Divider />
      </div>
    );  
}
export default CardArea;

CardArea.defaultProps = {
  isLoading: false,
  title: '',
};

CardArea.propTypes = {
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  changePage: PropTypes.func.isRequired
};
