//dataService - revealing module pattern
(function () {
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
        return await getJson(songsRESTServerURL + songsRoute);
    }

    async function addNewSong(song) {
        return await postJson(songsRESTServerURL + songsRoute, song);
    }

    async function updateSongRating(songId, rating) {
        return await patchJson(songsRESTServerURL + songsRoute + '/' + songId, {rating});
    }

    async function updateSong(song) {
        return await patchJson(songsRESTServerURL + songsRoute + '/' + song.id, song);
    }

    async function deleteSong(songId) {
        return await deleteResource(songsRESTServerURL + songsRoute + '/' + songId);
    }

    window.dataService = {getSongs, updateSongRating, addNewSong, updateSong, deleteSong};
})();

