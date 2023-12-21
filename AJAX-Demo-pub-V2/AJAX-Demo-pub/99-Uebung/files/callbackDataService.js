//dataService -- ES 6 Module

const songsRESTServerURL = 'http://localhost:3000/';
const songsRoute = 'songs';

async function getSongs(processRetrievedSongsCallbackFn) {

    // fetch(songsRESTServerURL+songsRoute)
    //     .then(response => response.json())
    //     .then(processRetrievedSongsCallbackFn);

    const response = await fetch(songsRESTServerURL+songsRoute);
    const songs =  await response.json();
    processRetrievedSongsCallbackFn(songs);
}

export default {getSongs};
