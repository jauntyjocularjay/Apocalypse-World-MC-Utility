const BASIC_MOVES = {
    underFire: {
        alias: 'Act Under Fire',
        description: 'You can read “under fire” to mean any kind of serious pressure at all. Call for this move whenever someone does something requiring unusual discipline, resolve, endurance or care.',
        roll: 'cool',
        opt: [],
        scale: {
            success: 'You do it.',
            partial: 'You do it, but flinch, hesitate, or stall or the MC will offer you a worse outcome, hard bargain, or ugly choice.',
            miss: 'Be prepared for the worst.',
        }
    },
    goAggro: {
        alias: 'Go Aggro',
        description: 'Going aggro on someone means threatening or attacking them when it\'s not, or not yet, a fight. Use it whenever the character\'s definitely the aggressor: when the target isn\'t expecting the attack, isn\'t prepared to fight back, doesn\'t want to fight back, or can\'t fight back effectively.',
        roll: 'hard',
        opt: [ 
            'Force your hand and suck it up.',
            'Cave and do what you want.',
            'Get the hell out of your way.',
            'Barricade themselves securely in.',
            'Give you something they think you want, or tell you what you want to know.',
            'Back off calmly, hands where you can see.'
        ],
        scale: {
            success: 'They have to choose 1 between 1-2',
            partial: 'they can choose any 1:',
            miss: 'Be prepared for the worst.',
        }
    },
    suckerSomebody: {
        alias: 'Sucker Somebody',
        description: 'To sucker someone is to attack them by surprise or from ambush. Use it whenever the character is the aggressor, but the target is not expecting trouble and isn\'t prepared to fight back.',
        roll: null,
        opt: [],
        scale: {
            success: 'Inflict harm as established.',
            partial: null,
            miss: 'Treat it as Going Aggro',
        }
    },
    doBattle: {
        alias: 'Do Battle',
        description: '',
        roll: null,
        opt:[],
        scale: {
            success: 'Bring battle moves into play',
            partial: null,
            miss: null,
        }
    },
    seduceOrManipulateNPC: {
        alias: 'Seduce or Manipulate an NPC',
        description: 'When you try to seduce, manipulate, bluff, fast-talk, or lie to someone, tell them what you want them to do, give them a reason, and +hot.',
        roll: 'hot',
        opt: [],
        scale: {
            success: 'they\'ll go along with you, unless or until some fact or action betrays the reason you gave them.',
            partial: 'they\'ll go along with you, but they need concrete assurance, corroboration, or evidence first.',
            miss: 'NPC, be prepared for the worst.'
        },
        opt: []
    },
    seduceOrManipulatePC: {
        alias: 'Seduce or Manipulate a PC',
        description: 'When you try to seduce, manipulate, bluff, fast-talk, or lie to someone, tell them what you want them to do, give them a reason, and +hot.',
        roll: 'hot',
        opt: [
            'If they go along with you, they mark experience.',
            'If they refuse, erase one of their stat highlights for the remainder of the session.'
        ],
        scale: {
            success: 'both options',
            partial: 'Choose one.',
            miss: 'PC, be prepared for the worst.',
        }
    },
    helpInterfere: {
        alias: 'Help or Interfere',
        description: 'When you help or interfere with someone who\'s making a move',
        roll: 'Hx',
        opt: [],
        scale: {
            success: 
                'they take +2 or -2, your choice.',
            partial: 
                'they still get a +1 or -1, your choice.',
            miss: 
                'you expose yourself to trouble or danger without helping or interfering.',
        }
    },
    readSitch: {
        alias: 'Read a Sitch',
        description: 'When you read a charged situation, +sharp.',
        roll: 'sharp',
        opt: [
            'What\'s my best way in?',
            'What\'s my best way out?',
            'Are there any dangers we haven\'t noticed?',
            'What\'s my enemy\'s true position?',
            'Who\'s in control here?',
            'What\'s my best way to protect the victims?'
        ],
        scale: {
            success: 'ask 3',
            partial: 'ask 1',
            miss: 'Ask 1, be prepared for the worst.',
        }
    },
    readPerson: {
        alias: 'Read a Person',
        description: 'When you read a person in a charged interaction.',
        roll: 'sharp',
        opt: [
            'Is your character telling the truth?',
            'What\'s your character really feeling?',
            'What does your character intend to do?',
            'What does your character wish I\'d do?',
            'How could I get your character to _____?',
        ],
        scale: {
            success: 'ask 3',
            partial: 'ask 1',
            miss: 'Ask 1, be prepared for the worst.'
        }
    },
    openBrain: {
        alias: 'Open Your Brain to the World\'s Psychic Maelstorm',
        description: 'On a hit, the MC tells you something new and interesting about the current situation, and might ask you a question or two; answer them',
        roll: 'weird',
        opt: [],
        scale: {
            success: 'he MC gives you good detail.',
            partial: 'the MC gives you an impression',
            miss: 'be prepared for the worst.'
        }
    },
    lifestyle: {
        alias: 'Lifestyle and Gigs',
        description: 'At the beginning of the session, spend 1- or 2-barter for your lifestyle. If you can\'t or won\'t, tell the MC and answer her questions. If you need jingle during a session, tell the MC you\'d like to work a gig',
        roll: null,
        opt: [],
        scale: {
            success: null,
            partial: null,
            miss: null
        }
    },
    sessionEnd: {
        alias: 'Session End',
        description: 'At the end of every session, choose a character who knows you better than they used to. If there\'s more than one, choose one at your whim. Tell that player to add +1 to their Hx with you on their sheet. If this brings them to Hx+4, they reset to Hx+1 (and therefore mark experience). If no one knows you better, choose a character who doesn\'t know you as well as they thought, or choose any character at your whim. Tell that player to take -1 to their Hx with you on their sheet. If this brings them to Hx -3, they reset to Hx=0 (and therefore mark experience).',
        roll: null,
        opt: [],
        scale: {
            success: null,
            partial: null,
            miss: null
        }
    },
    harm: {
        alias: 'Suffer Harm',
        description: '',
        roll: 'harm',
        opt: [
            'You\'re out of action: unconscious, trapped, incoherent or panicked.',
            'It\'s worse than it seemed. Take an additional 1-harm',
            'You lose your footing.',
            'You lose your grip on whatever you\'re holding.',
            'You lose track of someone or something you\'re attending to.',
            'You miss noticing something important'
        ],
        scale: {
            success: 'MC chooses 1 from 1-2',
            partial: 'MC chooses 2 from 3-6',
            miss: 'MC can choose something from the partial list above. If she does, though, it\'s instead of some of the harm you\'re suffering, so you take -1harm.'
        }
    }
}


/*
,
    property: {
        alias: '',
        description: '',
        roll: '',
        opt: [],
        scale: {
            success: '',
            partial: '',
            miss: 'be prepared for the worst.'
        }
    }
*/

export { BASIC_MOVES }