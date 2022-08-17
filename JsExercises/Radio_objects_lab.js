

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
            ]
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
                
            ]
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
        },

    ], 
     chooseSong(){
        let songPlaying = Math.floor(Math.random()*3) //chooses a random number 0-2
        let radios = Math.floor(Math.random()*3)    //chooses a random number 0-2
        let newSong = radio.stations[radios].songs[songPlaying] //newSong variable assigns the location with variables radioS and songPlaying as random numbers to search through the object   
        let radios2 = radio.stations[radios]   
    console.log("Now playing " + newSong.title + ' by ' + newSong.artist + ' on ' + radios2.name + ' radio. The one stop station for music') //("Now Playing:" + song.title + "by" + song.artist)
},
}

radio.chooseSong()


