import React, {Component} from 'react'
import axios from 'axios'
import AllAlbums from './AllAlbums'

export default class AllAlbums extends Component {
    constructor() {
        super()
        this.state = {
            albums: []
        }
    }

    componentDidMount() {
        axios.get('/api/albums/')
            .then(res => res.data)
            .then(albums => {
                this.setState({albums})
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <AllAlbums albums={this.state.albums}/>
        )
    }
}