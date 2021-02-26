import React from 'react';
import './style.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Header = props => {
    return (
        <header>
            <h1 className='header_text'>Header</h1>
            <nav className='links'>
              <Link to='/' className='home'>Home</Link>
              <Link to='/sign-in' className='sign_in'>Sign in</Link>
            </nav>
            {props.location.pathname === '/' &&
            <div className='counter_box'>
                <span className='counter_text'>Cards: </span>
                <span className='counter'>{props.cards.length}</span>
            </div>}
        </header>
    )
}

const mapStateToProps = state => {
  return {
    cards: state.cards
  }
}
export default connect(mapStateToProps)(withRouter(Header));
