class Media {
  constructor(info) {
    this.publicDate = info.publicDate;
    this.name = info.name;
  }
}

class Song extends Media {
  constructor(songData) {
    super(songData);
    this.artist = songData.artist;
  }
}

const MySong = new Song({
  artist: "Roselia",
  name: "Fire Bird",
  publicDate: 1975,
});
console.log(MySong);
