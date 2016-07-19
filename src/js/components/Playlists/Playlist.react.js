import React, { Component } from 'react';

import TracksList from '../Shared/TracksList.react.js';


/*
|--------------------------------------------------------------------------
| Playlist
|--------------------------------------------------------------------------
*/

export default class Playlists extends Component {

    constructor(props) {

        super(props);
        this.state = {};
    }

    render() {

        if(!!this.props.tracks && !!this.props.tracks.length && this.props.tracks.length > 0) {
            return (
                <TracksList
                    type='playlist'
                    currentPlaylist={ this.props.params.id }
                    tracks={ this.props.tracks }
                    trackPlayingId={ this.props.trackPlayingId }
                    playlists={ this.props.playlists }
                />
            );
        }

        return (
            <div className='full-message'>
                <p>Empty playlist</p>
            </div>
        );
    }
}
