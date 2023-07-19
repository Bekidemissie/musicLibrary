const library = {
    tracks: {
      t01: {
        id: "t01",
        name: "Code Monkey",
        artist: "Jonathan Coulton",
        album: "Thing a Week Three"
      },
      t02: {
        id: "t02",
        name: "Model View Controller",
        artist: "James Dempsey",
        album: "WWDC 2003"
      },
      t03: {
        id: "t03",
        name: "Four Thirty-Three",
        artist: "John Cage",
        album: "Woodstock 1952"
      }
    },
    playlists: {
      p01: {
        id: "p01",
        name: "Coding Music",
        tracks: ["t01", "t02"]
      },
      p02: {
        id: "p02",
        name: "Other Playlist",
        tracks: ["t03"]
      }
    },
    printPlaylists: function() {
      let objectKeys = Object.keys(this.playlists);
      for (key of objectKeys) {
        console.log(`${key}: ${this.playlists[key].name} - ${this.playlists[key].tracks.length} tracks`);
      }
    },
    
    printTracks: function() {
      let objectKeys = Object.keys(this.tracks);
      for (key of objectKeys) {
        console.log(`${key}: ${this.tracks[key].name} by ${this.tracks[key].artist} \(${this.tracks[key].album}\)`);
      }
    },
    printPlaylist: function(playlistId) {
      let objectKeys = Object.keys(this.playlists);
      for (key of objectKeys) {
        if (key === playlistId) {
          let playlistTracks = Object.values(this.playlists[key].tracks);
          console.log(playlistTracks);
          console.log(`${key}: ${this.playlists[key].name} - ${this.playlists[key].tracks.length} tracks`);
          for (track of playlistTracks) {
            console.log(`${track}: ${this.tracks[track].name} by ${this.tracks[track].artist} \(${this.tracks[track].album}\)`);
          }
        }
      }
    },
    addTrackToPlaylist: function(trackId, playlistId) {
      const trackKeys = Object.keys(this.tracks);
      const playlistKeys = Object.keys(this.playlists);
      console.log(trackKeys, playlistID)
      if (trackId in this.tracks && playlistId in this.playlists) {
         console.log(this.playlists[playlistId].tracks)
        this.playlists[playlistId].tracks.push(trackId);
        console.log(this.playlists); //ASK why when I take log this by itself, it doesn't work. Has to be this.playlists
      } else {
        return console.log("Track or Playlist does not exist");
      }
    },
    generateUid: function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },
    addTrack: function(name, artist, album) {
      const newTrack = this.generateUid();
      this.tracks[newTrack] = {
        name: name,
        artist: artist,
        album: album
      };
    },
    addPlaylist: function(name) {
      const newPlaylist = this.generateUid();
      this.playlists[newPlaylist] = {
        name: name
      };
      console.log(library.playlists);
    }
  };