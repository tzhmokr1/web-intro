import dataService from "./dataService.js";

function initApp() {

    // model
    let songs; //holds songs locally

    function compareSongs(s1, s2) {
        return s2.rating - s1.rating;
    }

    function findSong(id) {
        return songs.find(song => id === song.id);
    }

    function getSongIndex(id) {
        return songs.findIndex(function (song) {
            return song.id === id;
        });
    }

    let editSongId; // used in edit dialog

    // view refs
    const songsList = document.getElementById('songs-list');
    const newArtistNameInput = document.getElementById('new-artist-input');
    const newSongTitleInput = document.getElementById('new-song-title-input');
    const newSongForm = document.getElementById('new-song-form');
    const editArtistNameInput = document.getElementById('edit-artist-input');
    const editSongTitleInput = document.getElementById('edit-song-title-input');
    const editSongDialog = document.getElementById('edit-song-dialog');
    const editSongForm = editSongDialog.querySelector('form');
    const deleteSongButton = document.getElementById('delete-song-button');

    // view rendering
    function createSongsHtml(songs) {
        return songs.map(song =>
            `<li class="song-entry" id="song-${song.id}">
                    (${song.rating})
                        <button data-delta="1" data-song-id="${song.id}">+</button>
                        <button data-delta="-1" data-song-id="${song.id}">-</button>
                        <span class="title">${song.title}</span>
                        <span class="artist"> (${song.artist})</span>
                        <button data-edit="true" data-song-id="${song.id}">Edit</button>
            </li>`).join('');
    }

    async function renderSongs() {
        songs = await dataService.getSongs();
        renderSongsLocaly();
    }

    function renderSongsLocaly() {
        songs.sort(compareSongs);
        songsList.innerHTML = createSongsHtml(songs);
    }

    function showEditDialog() {
        editSongDialog.classList.add("displayed-dialog"); //show dialog fullscreen
        editSongDialog.hidden = false;
    }

    function hideEditDialog() {
        editSongDialog.classList.remove("displayed-dialog");
        editSongDialog.hidden = true;
    }

    function wiggleSongElement(songId) {
        const songElement = document.getElementById("song-" + songId);
        songElement.classList.add("wiggle")
    }

    // controller
    async function addSongHandler(event) {
        event.preventDefault();
        await dataService.addNewSong(
            {title: newSongTitleInput.value, artist: newArtistNameInput.value, rating: 0});
        newSongTitleInput.value = "";
        newArtistNameInput.value = "";
        renderSongs();
    }

    newSongForm.addEventListener('submit', addSongHandler);

    function rateSong(id, delta) {
        const song = findSong(id);
        const rating = song.rating + delta;
        song.rating = rating;
        dataService.updateSongRating(song.id, rating);
        renderSongsLocaly();
    }

    function editSong(songId) {
        editSongId = songId;
        const song = findSong(songId);
        editSongTitleInput.value = song.title;
        editArtistNameInput.value = song.artist;
        showEditDialog();
    }

    function updateSongHandler(event) {
        event.preventDefault();
        const song = findSong(editSongId);
        song.title = editSongTitleInput.value;
        song.artist = editArtistNameInput.value;
        dataService.updateSong(song);
        hideEditDialog();
        renderSongsLocaly();
    }

    editSongForm.addEventListener('submit', updateSongHandler);

    function deleteSongHandler(event) {
        dataService.deleteSong(editSongId);
        const songIndex = getSongIndex(editSongId);
        songs.splice(songIndex, 1);
        hideEditDialog();
        renderSongsLocaly();
    }

    deleteSongButton.addEventListener('click', deleteSongHandler);

    function songListClickHandler(event) {
        // takes advantage of event bubbling
        const buttonSongId = event.target.dataset.songId;
        if (buttonSongId) {
            if (event.target.dataset.delta) {
                const beforeSongIndex = getSongIndex(buttonSongId);
                const buttonDelta = Number(event.target.dataset.delta);
                rateSong(buttonSongId, buttonDelta);
                const afterSongIndex = getSongIndex(buttonSongId);
                if (afterSongIndex !== beforeSongIndex) {
                    wiggleSongElement(buttonSongId);
                }
            } else {
                // edit button
                editSong(buttonSongId);
            }
        }
    }

    songsList.addEventListener("click", songListClickHandler);

    //init view
    renderSongs();
}

window.onload = initApp;