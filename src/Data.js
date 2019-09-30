function Data(){
    return { 
        
                profile : {
                    name: 'David Bud',
                    title: 'Game Designer',
                    bio: `Hi my name is David, I am a Passionate Games Designer that uses C#, JavaScript and Unity. 
                        I enjoy learning and challenging myself to be a better designer` 

                }, 

        
                gameOne: {
                name : 'Maru Maru',  
                description : `Maru Maru is a puzzle game designed in my spare time for me to learn how to publish a game. 
                                It's my first Android game and was made in Unity.`, 
                instructions : `In this puzzle game the goal is to turn on all the robots. This can be achieved by turning on/off their neighbours. When 
                                clicking a robot, any adjacent robots will also change their state, if a robot is on, they will turn off, and visa versa. 
                                Each level has a new puzzle to work through, and while some levels may look similar, they have very different ways of solving
                                them. Initially, the game was going to be 9 levels long, but after some play testing I was told that while people enjoyed 
                                the concept, the players who easily past the levels were dissapointed there were not more. The thing I found hardest about 
                                making this game, was balancing, as some playtesters would be able to finish all the levels within 10 minutes, while others 
                                would struggle on the first level for 30. I tried to fix this with the tutorial, however I'm unsure if that has helped much. 
                                Something I would do differently in the future would be to slowly ramp up the difficulty. I did not do that in this game 
                                as I only wanted a set amount of levels, and I wanted more advanced players to still find a challange in this game.`,
                images : 
                                [require('./Images/MaruMaru/img1.jpg'), require('./Images/MaruMaru/img2.jpg'), require('./Images/MaruMaru/img3.jpg'), 
                                require('./Images/MaruMaru/img4.jpg'), require('./Images/MaruMaru/img5.jpg'), require('./Images/MaruMaru/img6.jpg'), 
                                require('./Images/MaruMaru/img7.jpg'), require('./Images/MaruMaru/img8.jpg') 
            ]

                    },

                gameTwo : {
                name: `Mirror Me`,
                description : `Mirror Me was a final year university collaborative project between myself and Daniel Bou-Antoun.
                                The game took the better part of a year and started off as a simple idea "What if you had to kill your mirror copy. This came together 
                                when I created a small prototype where a player would be mirrored past a transparent wall and would have to use the other character to 
                                walk through the level assisted by the visible parts of the mirrored level.`,
                instructions : `Initially the game was going to just have your mirror copy past a semi transparent wall, this would have served as a 'mirror', and once 
                                the player eliminated the copy, they could move across to the other side by clicking on an empty mirror object at the end of each level.
                                At this point the player would not actually interact at all with the mirror copy, but this quickly changed as we recieved feedback on 
                                the game.`,
                images : 
                            [require('./Images/MirrorMe/img1.png'), require('./Images/MirrorMe/img2.png'), require('./Images/MirrorMe/img3.png'), 
                            require('./Images/MirrorMe/img4.png'), require('./Images/MirrorMe/img5.png'), require('./Images/MirrorMe/img6.png'), 
                            require('./Images/MirrorMe/img7.png'), require('./Images/MirrorMe/img8.png'), require('./Images/MirrorMe/img9.png'), 
                            require('./Images/MirrorMe/img10.png'), require('./Images/MirrorMe/img11.png')]
                },

                gameThree : {
                name: `Game 3`,
                description: `none`,
                instructions: `none`,
                images : [require('./Images/prototypes/ItsRainingMen.gif'), require('./Images/prototypes/PacMaze.gif')]
            }
    
}
}

export default Data