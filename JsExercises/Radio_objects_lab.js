

let radio = 
{
stations: 
    [
        {
            name: 1,
            songs: 
            [
                {
                    title: "FLEX UP",
                    artist: "Lil Uzi Vert",
                },

                {
                    title: "Go",
                    artist: "The Kid Laroi",
                },

                {
                    title: "Walk in the Park",
                    artist: "Jack Harlow",
                },
            ],
            genre: 'Rap'
        },

        {
            name: 2,
            songs: 
            [
                {
                    title: "Babydoll",
                    artist: "Dominic Fike",
                },
                    
                {
                    title: "Bad Habit",
                    artist: "Steve Lacy",
                },

                {
                    title: "icarus",
                    artist: "Glaive",
                },
                
            ],
            genre: 'alternative Indie',
        },

        {
            name: 3,
            songs:
            [
                {
                    title: "Down by the Tractor",
                    artist: "Billy bob Jenkins",
                },
                    
                {
                    title: "She left me with the farm",
                    artist: "Lonley Steve",
                },

                {
                    title: "Where'd the cowboys go?",
                    artist: "Cowboy Carl",
                },
                
            ],
            genre: 'Country',
        },

    ], 
     chooseSong(){
        let radios = Math.floor(Math.random()*radio.stations.length) //chooses a random number using the length of the stations array
        let songPlaying = Math.floor(Math.random()*radio.stations[radios].songs.length)    //chooses a random number in the station we chose in radios variable inside the songs array
        let newSong = radio.stations[radios].songs[songPlaying] //newSong variable assigns the location with variables radioS and songPlaying as random numbers to search through the object   
        let radios2 = radio.stations[radios]   // assigns what radio station the song is on
        let genre2 = radio.stations[radios].genre // assigns which genre the station plays
    console.log("Now playing " + newSong.title + ' by ' + newSong.artist + ' on ' + radios2.name + ' radio. The one stop station for ' + genre2 + ' music'
    ) //("Now Playing:" + song.title + "by" + song.artist)
},
}

radio.chooseSong()


