import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';
class App extends Component {
    constructor() {
        super()
        this.state ={
            robots: [], 
            searchField: '',
            loading: true
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
        const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
        const loading = this.state.loading
        return (
            <div className="tc">
                <h1 className='f2'>RoboFriends</h1>
                {loading ? (
                    <h2>Loading</h2>
                ) : (
                    <div>
                        <SearchBox searchChange={this.onSeearchChange} />
                        <CardList robots={filteredRobots} />
                    </div>
                )}
            </div>
        );
    }
}

export default App; 