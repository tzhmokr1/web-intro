//dataService -- ES 6 Module
    const songsRESTServerURL = 'http://localhost:3000/';
    const songsRoute = 'songs';

    async function getJson(url) {
        const response = await fetch(url);
        return response.json();
    }

    async function postJson(url, json) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(json),
        });
        return response.json();
    }

    async function patchJson(url, json) {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(json),
        });
        return response.json();
    }

    async function deleteResource(url) {
        const response = await fetch(url, {
            method: 'delete',
        });
        return response.json();
    }

    async function getSongs() {
        return getJson(songsRESTServerURL + songsRoute);
    }

    async function addNewSong(song) {
        return postJson(songsRESTServerURL + songsRoute, song);
    }

    async function updateSongRating(songId, rating) {
        return patchJson(songsRESTServerURL + songsRoute + '/' + songId, {rating});
    }

    async function updateSong(song) {
        return patchJson(songsRESTServerURL + songsRoute + '/' + song.id, song);
    }

    async function deleteSong(songId) {
        return deleteResource(songsRESTServerURL + songsRoute + '/' + songId);
    }

    export default {getSongs, updateSongRating, addNewSong, updateSong, deleteSong};
