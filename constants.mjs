const BASIC_MOVES = {
    underFire: {
        alias: 'Act Under Fire',
        description: 'You can read “under fire” to mean any kind of ' + 
            'serious pressure at all. Call for this move whenever ' +
            'someone does something requiring unusual discipline, ' +
            'resolve, endurance or care.',
        roll: 'roll+cool',
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
        scale: {
            success: '',
            partial: '',
            miss: '',
        }
    }
}