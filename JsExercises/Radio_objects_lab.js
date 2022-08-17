

let radio = {
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
    randomStation(){
       console.log(Math.floor(math.random()*stations))
    }
} 

console.log(radio)