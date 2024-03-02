const BASIC_MOVES = {
    underFire: {
        alias: 'Act Under Fire',
        description: 'You can read “under fire” to mean any kind of ' + 
            'serious pressure at all. Call for this move whenever ' +
            'someone does something requiring unusual discipline, ' +
            'resolve, endurance or care.',
        roll: 'roll+cool',
        opt: [],
        scale: {
            success: '10+: You do it.',
            partial: '7-9: You do it, but flinch, hesitate, or '+
                'stall or the MC will offer you a worse ' +
                'outcome, hard bargain, or ugly choice.',
            miss: '<7: Be prepared for the worst.',
        }
    },
    goAggro: {
        alias: 'Go Aggro',
        description: 'Going aggro on someone means threatening or ' +
            'attacking them when it\'s not, or not yet, a fight. ' + 
            'Use it whenever the character\'s definitely the ' + 
            'aggressor: when the target isn\'t expecting the ' + 
            'attack, isn\'t prepared to fight back, doesn\'t want ' + 
            'to fight back, or can\'t fight back effectively.',
        roll: 'roll+hard',
        opt: [ 
            'Force your hand and suck it up.',
            'Cave and do what you want.',
            'Get the hell out of your way.',
            'Barricade themselves securely in.',
            'Give you something they think you want, ' +
                'or tell you what you want to know.',
            'Back off calmly, hands where you can see.'
        ],
        scale: {
            success: '10+: They have to choose 1 between 0-1',
            partial: 'they can choose any 1:',
            miss: '<7: Be prepared for the worst.',
        }
    },
    suckerSomebody: {
        alias: 'Sucker Somebody',
        description: 'To sucker someone is to attack them by ' +
            'surprise or from ambush. Use it whenever the character ' +
            'is the aggressor, but the target is not expecting ' +
            'trouble and isn\'t prepared to fight back.',
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
        description: 'When you try to seduce, manipulate, bluff, ' + 
            'fast-talk, or lie to someone, tell them what you want ' + 
            'them to do, give them a reason, and roll+hot.',
        roll: 'roll+hot',
        opt: [],
        scale: {
            success: '10+: they’ll go along with you, unless or until ' +
                    'some fact or action betrays the reason you gave ' +
                    'them.',
            partial: '7-9: they’ll go along with you, but they need ' +
                    'concrete assurance, corroboration, or evidence ' + 
                    'first.',
            miss: '<7: NPC, be prepared for the worst.'
        },
        opt: []
    },
    seduceOrManipulatePC: {
        alias: 'Seduce or Manipulate a PC',
        description: 'When you try to seduce, manipulate, bluff, ' + 
            'fast-talk, or lie to someone, tell them what you want ' + 
            'them to do, give them a reason, and roll+hot.',
        roll: 'roll+hot',
        opt: [
            'If they go along with you, they mark experience.',
            'If they refuse, erase one of their stat ' + 
                'highlights for the remainder of the session.'
        ],
        scale: {
            success: '10+: both options',
            partial: '7-9: Choose one.',
            miss: '<7: PC, be prepared for the worst.',
        }
    },
    helpInterfere: {
        alias: 'Help or Interfere',
        description: 'When you help or interfere with someone who\'s ' +
            'making a move',
        roll: 'roll+Hx',
        opt: [],
        scale: {
            success: 
                '10+: they take +2 or -2, your choice.',
            partial: 
                '7-9: they still get a +1 or -1, your choice.',
            miss: 
                '<7: you expose yourself to trouble or danger ' +
                'without helping or interfering.',
        }
    },
    readSitch: {
        alias: 'Read a Sitch',
        description: 'When you read a charged situation, roll+sharp.',
        roll: 'roll+sharp',
        opt: [
            'What\'s my best way in?',
            'What\'s my best way out?',
            'Are there any dangers we haven\'t noticed?',
            'What\'s my enemy\'s true position?',
            'Who\'s in control here?',
            'What\'s my best way to protect the victims?'
        ],
        scale: {
            success: '10+: ask 3',
            partial: '7-9: ask 1',
            miss: '<7: Ask 1, be prepared for the worst.',
        }
    },
    readPerson: {
        alias: 'Read a Person',
        description: 'When you read a person in a charged interaction.',
        roll: 'roll+sharp',
        opt: [
            'Is your character telling the truth?',
            'What\'s your character really feeling?',
            'What does your character intend to do?',
            'What does your character wish I\'d do?',
            'How could I get your character to _____?',
        ],
        scale: {
            success: '10+: ask 3',
            partial: '7-9: ask 1',
            miss: '<7: Ask 1, be prepared for the worst.'
        }
    },
    openBrain: {
        alias: 'Open Your Brain to the World\'s Psychic Maelstorm',
        description: 'On a hit, the MC tells you something new and ' + 
            'interesting about the current situation, and might ask ' + 
            'you a question or two; answer them',
        roll: 'roll+weird',
        opt: [],
        scale: {
            success: '10+: he MC gives you good detail.',
            partial: '7-9: the MC gives you an impression',
            miss: '<7: be prepared for the worst.'
        }
    },
    lifestyle: {
        alias: 'Lifestyle and Gigs',
        description: 'At the beginning of the session, spend 1- or ' + 
            '2-barter for your lifestyle. If you can’t or won’t, tell ' + 
            'the MC and answer her questions. If you need jingle ' + 
            'during a session, tell the MC you’d like to work a gig',
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
        description: 'At the end of every session, choose a character ' + 
        'who knows you better than they used to. If there’s more than ' + 
        'one, choose one at your whim. Tell that player to add +1 to ' + 
        'their Hx with you on their sheet. If this brings them to ' + 
        'Hx+4, they reset to Hx+1 (and therefore mark experience). If ' + 
        'no one knows you better, choose a character who doesn’t know ' + 
        'you as well as they thought, or choose any character at your ' + 
        'whim. Tell that player to take -1 to their Hx with you on ' + 
        'their sheet. If this brings them to Hx -3, they reset to Hx=0 ' + 
        '(and therefore mark experience).',
        roll: null,
        opt: [],
        scale: {
            success: null,
            partial: null,
            miss: null
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
            success: '10+: ',
            partial: '7-9: ',
            miss: '<7: be prepared for the worst.'
        }
    }
*/

export { BASIC_MOVES }