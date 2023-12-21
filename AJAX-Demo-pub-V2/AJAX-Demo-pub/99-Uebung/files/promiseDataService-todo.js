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
        //todo
    }

    async function addNewSong(song) {
        //todo
    }

    export default {getSongs, addNewSong};
