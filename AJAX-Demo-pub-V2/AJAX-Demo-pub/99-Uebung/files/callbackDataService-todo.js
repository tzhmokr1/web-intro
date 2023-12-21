//dataService -- ES 6 Module

const songsRESTServerURL = 'http://localhost:3000/';
const songsRoute = 'songs';

async function getSongs(processRetrievedSongsCallbackFn) {

    //todo sowohl .then als auch await zum laufen bringen
    //test mit 01-asyncCallbackSongs-todo.html

    // Variante .then
    // fetch(songsRESTServerURL+songsRoute)
    //     .then(....
    // ...

    // Variante await
    // const response = await fetch(....
    // ...
}

export default {getSongs};
