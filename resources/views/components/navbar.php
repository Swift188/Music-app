<div class="navbar">
    <a href="<?= route('playlists'); ?>" class="active"><i class="fas fa-home"></i></a>
    <a href="<?= route('search'); ?>"><i class="fas fa-search"></i></a>
    <a href="<?= route('logout'); ?>"><i class="fas fa-cog"></i></a>
    <a href="<?= route('panel'); ?>"><i class="fas fa-upload"></i></a>
</div>

<link rel="stylesheet" href="/css/navbar.css">
<div id="music-player" style="display: none">
    <img id="song-icon" src="/img/images.jpeg">
    <div id="song-info">
        <div id="song-title">Macy</div>
        <div id="song-album">album</div>
    </div>
    <div id="player-btns">
        <button id="play-pause" class="btn btn-circle btn-transparent btn-icon">
            <img src="/img/icons/play.png" />
        </button>
    </div>
</div>

<audio id="audio-element" preload="auto">

</audio>