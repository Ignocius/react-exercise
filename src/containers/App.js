import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';
class App extends Component {
    constructor() {
        super()
        this.state ={
            robots: [], 
            searchField: ''
        }
    }

    onSeearchChange = (event)=> {
        this.setState({ searchField: event.target.value}) 
    }
    
    async componentDidMount() {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        this.setState({ robots: users, loading: false })
    }

    render() {
        const { robots, searchField, loading } = this.state
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div className="tc">
                <h1 className='f2'>RoboFriends</h1>
                {!robots.length ? (
                    <h2>Loading</h2>
                ) : (
                    <div>
                        <SearchBox searchChange={this.onSeearchChange} />
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

export default App; 