const moves = {
    underFire:[
        'roll+cool',
        'On a [10+], you do it.',
        'On a [7:9], you flinch, hesitate, or stall: the MC can offer you a worse outcome, a hard bargain, or an ugly choice.',
        'On a [0:6], be prepared for the worst.'
    ],

    goAggro:[
        'roll+hard',
        'On a [10+], they have to choose 1:',
        '• Force your hand and suck it up.',
        '• Cave and do what you want.',
        'On a [7:9], they can choose 1 of the above, or 1 of the following:',
        '• Get the hell out of your way.',
        '• Barricade themselves securely in.',
        '• Give you something they think you want, or tell you what you want to hear.',
        '• Back off calmly, hands where you can see.',
        'On a [0:6], be prepared for the worst.'
    ],

    sucker: [
        'When you attack someone unsuspecting or helpless, ask the MC if you could miss. If you could, treat it as going aggro,',
        'but your victim has no choice to cave and do what you want. If you couldn\'t, you simply inflict harm as established.'
    ],
    
    seize:[
        'To seize something by force, exchange harm, but first roll+hard.',
        'On a [10+], choose 3. On a [7:9], choose 2. On a [0:6], choose 1:',
        '• You inflict terrible harm (+1harm).',
        '• You suffer little harm (-1harm).',
        '• You take definite and undeniable control of it.',
        '• You impress, dismay, or frighten your enemy.'
    ],

        seduceManipulate: [
          'roll+hot',
          'For NPCs: On a [10+], they\'ll go along with you, unless or until some fact or action betrays the reason you gave them.',
          'On a [7:9], they\'ll go along with you, but they need some concrete assurance, corroboration, or evidence first.',
          'For PCs: On a [10+], both.',
          'On a [7:9], choose 1:',
          '• If they go along with you, they mark experience.',
          '• If they refuse, erase one of their stat highlights for the remainder of the session.',
          'What they do then is up to them.',
          'On a [0:6], for either NPCs or PCs, be prepared for the worst.'
        ],

        readSitch: [
          'roll+sharp',
          'On a hit, you can ask the MC questions. Whenever you act on one of the MC\'s answers, take +1.',
          'On a [10+], ask 3. On a [7:9], ask 1:',
          '• Where\'s my best escape route, way in, or way past?',
          '• Which enemy is most vulnerable to me?',
          '• Which enemy is the biggest threat?',
          '• What should I be on the lookout for?',
          '• What\'s my enemy\'s true position?',
          '• Who\'s in control here?',
          'On a [0:6], ask 1 anyway, but be prepared for the worst.'
        ],

        readPerson: [
          'roll+sharp',
          'On a [10+], hold 3.',
          'On a [7:9], hold 1.',
          'While you\'re interacting with them, spend your hold to ask their player questions, 1 for 1:',
          '• Is your character telling the truth?',
          '• What\'s your character really feeling?',
          '• What does your character intend to do?',
          '• What does your character wish I\'d do?',
          '• How could I get your character to —?',
          'On a [0:6], ask 1 anyway, but be prepared for the worst.'
        ],

        openBrain: [
          'roll+weird',
          'On a hit, the MC tells you something new and interesting about the current situation, and might ask you a question or two; answer them.',
          'On a [10+], the MC gives you good detail.',
          'On a [7:9], the MC gives you an impression. If you already know all there is to know, the MC will tell you that.',
          'On a [0:6], be prepared for the worst.'
        ],

        helpInterfere: [
          'roll+Hx',
          'On a [10+], they take +2 (help) or -2 (interfere) to their roll.',
          'On a [7:9], they take +1 (help) or -1 (interfere) to their roll.',
          'On a [0:6], be prepared for the worst.'
        ],

        lifestyle: [
          'At the beginning of the session, spend 1- or 2-barter for your lifestyle. If you can\'t or won\'t, tell the MC and answer her questions.',
          '1-barter at the beginning of the session, that\'s the quality of life her character\'s had and can generally expect. The same as most people around her.',
          '2-barter at the beginning of the session, she has a quality of life that is substantially, notably better. Whatever other people eat, drink, and wear, she\'s eating, drinking, and wearing better. She sleeps more comfortably and safer, and has more control over her personal environment.',
          '0-barter, this should mean that at the beginning of the session she\'s desperately hungry and dying of thirst, but hold off. It could turn out that way.',
          'Another PC springs for them;',
          'If none of them can or will, though, you get to choose:',
          '• Go straight to, yes, she\'s desperately hungry and dying of thirst. Inflict harm as established. Take away stuff.',
          '• Choose a suitable NPC; Now the debt is between her and your NPC.',
          '• Ask player which NPC You can either negotiate an appropriate arrangement in summary, or else jump into play: have her read a person, seduce & manipulate, go aggro, or whatever she needs to do to get her way.'
        ],

          workGig:[
          'If you need jingle during a session, tell the MC you\'d like to work a gig.'
        ],

        sessionEnd: [
          'At the end of every session, choose a character who knows you better than they used to. If there\'s more than one, choose one at your whim. Tell that player to add +1 to their Hx with you on their sheet. If this brings them to Hx+4, they reset to Hx+1 (and therefore mark experience).',
          'If no one knows you better, choose a character who doesn\'t know you as well as they thought, or choose any character at your whim. Tell that player to take -1 to their Hx with you on their sheet. If this brings them to Hx -3, they reset to Hx=0 (and therefore mark experience).'
        ]
}


type Props = {
    _visible: boolean
}

const MoveDictionary: React.FC<Props> = ({ _visible }) => {
    const classes = ['card']

    if(!_visible) classes.push('hidden')

    return (
        <div className={classes.join(' ')}>
            <h1>Move Dictionary</h1>
        </div>
    )
}

export default MoveDictionary
