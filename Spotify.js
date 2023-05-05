import React from 'react';

const clientId = '2f3bfd9f691349d7948f8b11caf47592';
const redirectUri = 'http://localhost:3000/';
let accessToken= '';
let expiresIn= null;

class Spotify extends React.Component {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
        accessToken = window.location.href.match(/access_token=([^&]*)/);
        expiresIn = window.location.href.match(/expires_in=([^&]*)/);

        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');

        if (accessToken && expireIn) {
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        }
    }

}

export default Spotify;