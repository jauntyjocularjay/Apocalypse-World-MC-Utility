const move = {
    underFire:
        `roll+cool \n`+
        `On a [10+], you do it. \n`+
        `On a [7:9], you flinch, hesitate, or stall: the MC can offer you a worse outcome, a hard bargain, or an ugly choice. \n`+
        `On a [0:6], be prepared for the worst.`,
    goAggro:
        `roll+hard \n`+
        `On a [10+], they have to choose 1: \n`+
        `• Force your hand and suck it up. \n`+
        `• Cave and do what you want. \n`+
        `On a [7:9], they can choose 1 of the above, or 1 of the following: \n`+
        `• Get the hell out of your way. \n`+
        `• Barricade themselves securely in. \n`+
        `• Give you something they think you want, or tell you what you want to hear. \n`+
        `• Back off calmly, hands where you can see. \n`+
        `On a [0:6], be prepared for the worst.`,
    sucker:
        `When you attack someone unsuspecting or helpless, ask the MC if you could miss. If you could, treat it as going aggro, \n`+
        `but your victim has no choice to cave and do what you want. If you couldn't, you simply inflict harm as established.`,
    seize:
        `To seize something by force, exchange harm, but first roll+hard. \n`+
        `On a [10+], choose 3. On a [7:9], choose 2. On a [0:6], choose 1: \n`+
        `• You inflict terrible harm (+1harm). \n`+
        `• You suffer little harm (-1harm). \n`+
        `• You take definite and undeniable control of it. \n`+
        `• You impress, dismay, or frighten your enemy.`,



}