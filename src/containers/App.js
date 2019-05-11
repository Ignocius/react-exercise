import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {

    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        onSeearchChange: (event) => dispatch(setSearchField(event.target.value))
    } 
}
class App extends Component {
    constructor() {
        super()
        this.state ={
            robots: []
        }
    }
    
    async componentDidMount() {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        this.setState({ robots: users, loading: false })
    }

    render() {
        const { robots } = this.state;
        const { searchField, onSeearchChange } = this.props;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div className="tc">
                <h1 className='f2'>RoboFriends</h1>
                {!robots.length ? (
                    <h2>Loading</h2>
                ) : (
                    <div>
                        <SearchBox searchChange={onSeearchChange} />
                        <Scroll>
                            <ErrorBoundry>
                                <CardList robots={filteredRobots} />
                            </ErrorBoundry>
                        </Scroll>
                    </div>
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 