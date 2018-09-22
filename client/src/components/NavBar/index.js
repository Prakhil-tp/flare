import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    AppBar,
    Toolbar,
    Avatar,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import SearchBar from 'material-ui-search-bar';
import avatar from 'assets/images/avatar2.jpg';
import logo from 'assets/flairLogo.png';
import { changeScreen, changeLoading, navSearch } from 'actions/navActions';



class NavBar extends Component {
    constructor(props){
			super(props);
			this.state = {
				searchValue:'',
			}
      this.handleSearch = this.handleSearch.bind(this);
      this.handleValueChange = this.handleValueChange.bind(this);
      this.onKeyPress = this.onKeyPress.bind(this);
    }

    //runs when spacekey press
    onKeyPress(event){
      if(event.key === ' ') this.handleSearch();
    }
    

		handleSearch(){
      const { searchValue } = this.state;
      const { changeLoading, changeScreen, navSearch } = this.props;

      changeScreen(true);
      changeLoading(true);
      navSearch({searchValue});
    }

    //handle text value changes
    handleValueChange(value){
      this.setState({ searchValue: value });
    }


    render() {
      const {  changeScreen, changeLoading } = this.props;
      const { searchValue } = this.state;
      return (	
        <AppBar position="fixed">
          <Toolbar>
            <div
              className="logo_wrapper"
              role="button"
              onClick={()=>{changeScreen(false);changeLoading(false);}} 
              onKeyUp={()=>{changeScreen(false);changeLoading(false);}}
              tabIndex={0}
            >
              <img src={logo} className="logo" alt="logo" />
            </div>
            <div style={{flexGrow: 1}} />
            {
              !isMobile? (
                <SearchBar
                  value={searchValue}
                  onChange={this.handleValueChange}
                  onRequestSearch={this.handleSearch}
                  onKeyDown={this.onKeyPress}
                  placeholder='Start by searching for your favourite movie'
                  style={{
                    margin: '0 auto',
                    width:'60%',
                    maxWidth: '60%',
                    backgroundColor: '#eee',
                    boxShadow: '0px 0px 0px inset'
                  }}
                />
              ):
                <div />
            }
            <div style={{flexGrow: 1}} />
            <Avatar alt="Remy Sharp" src={avatar} />
          </Toolbar>  
        </AppBar>
        );
    }
}

export default connect(null,{ navSearch, changeLoading, changeScreen })(NavBar);


NavBar.propTypes = {
  changeScreen: PropTypes.func.isRequired,
  changeLoading: PropTypes.func.isRequired,
  navSearch: PropTypes.func.isRequired
};
