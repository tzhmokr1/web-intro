//dataService -- ES 6 Module

const songs = [
    {"id": "01", "title": "Thank you for the music", "artist": "ABBA", "rating": 3},
    {"id": "02", "title": "California Girls", "artist": "Beach Boys", "rating": 2},
    {"id": "03", "title": "How Deep Is Your Love", "artist": "Bee Gees", "rating": 1},
    {"id": "04", "title": "Sweet Sixteen", "artist": "Chuck Berry", "rating": 0},
    {"id": "05", "title": "Roll Over Beethoven", "artist": "Electric Light Orchestra", "rating": 0},
    {"id": "06", "title": "Booze and Blues", "artist": "Ma Rainey", "rating": 0},
    {"id": "07", "title": "Beds Are Burning", "artist": "Diesel and Dust", "rating": 0}
];

const answerDelayMS = 2000;

function getSongs(processRetrievedSongsCallbackFn) {

    setTimeout(() => processRetrievedSongsCallbackFn(songs), answerDelayMS)

}

export default {getSongs};
