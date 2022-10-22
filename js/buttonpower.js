
addLayer("b", {
    effect(){

    },
    effect(){
        return Decimal.pow(2, player[this.layer].points)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
      },
      effect(){
        return player[this.layer].points.max(1).pow(5).log10().max(1)
      },
      effectDescription(){

},
doReset(resettingLayer) {
    let keep = [];
    if (hasMilestone("g", 4) && resettingLayer=="g") keep.push("upgrades")
    if (hasMilestone("c", 2) && resettingLayer=="c") keep.push("upgrades")
    if (hasMilestone("d", 2) && resettingLayer=="d") keep.push("upgrades")
    if (hasMilestone("f", 2) && resettingLayer=="f" , "d", "e", "h") keep.push("upgrades")
    if (hasMilestone("f", 4) && resettingLayer=="f" , "d", "a", "g" , "c", "e", "h") keep.push("challenges")
    if (layers[resettingLayer].row > this.row) layerDataReset("b", keep)
},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect)
    /*
      use format(num) whenever displaying a number
    */
   
  },
    upgrades: {
        11: { title: "26",
        description: "10x point gain.",
        cost: new Decimal(1),

        },
        12: { title: "27",
        description: "Point gain is boosted by Button Power.",
        cost: new Decimal(5),
        effect() {
            return player[this.layer].points.add(1).pow(0.5).min("1e10000000")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("b", 11)
        }
        },
        13: { title: "28",
        description: "69x Point Gain.",
        cost: new Decimal(10),
        unlocked() {
            return hasUpgrade("b", 12)
        
        }
        },
        14: { title: "29",
        description: "Gain 10x More Prestige Points.",
        cost: new Decimal(25),
        unlocked() {
            return hasUpgrade("b", 13)
        
        }
        },
        15: { title: "30",
        description: "Unlock more prestige point upgrades.",
        cost: new Decimal(100),
        unlocked() {
            return hasUpgrade("b", 14)
        
        }
        },
        21: { title: "31",
        description: "Keep first 2 rows of Prestige Point Upgrades.",
        cost: new Decimal(1.111e11),
        unlocked() {
            return hasUpgrade("p", 25)
        
        }
        },
        22: { title: "32",
        description: "100x Prestige Point Gain.",
        cost: new Decimal(1e13),
        unlocked() {
            return hasUpgrade("b", 21)
        
        }
        },
        23: { title: "33",
        description: "6,969x Point Gain.",
        cost: new Decimal(1e14),
        unlocked() {
            return hasUpgrade("b", 22)
        
        }
        },
        24: { title: "34",
        description: "6,969x Prestige Point Gain.",
        cost: new Decimal(1e21),
        unlocked() {
            return hasUpgrade("b", 23)
        
        }
        },
        25: { title: "35",
        description: "More Prestige Point Upgrades.",
        cost: new Decimal(1e23),
        unlocked() {
            return hasUpgrade("b", 24)
        
        }
        },
        31: { title: "36",
        description: "^1.01 Points.",
        cost: new Decimal(1e138),
        unlocked() {
            return hasUpgrade("a", 25)
        
        }
        },
        32: { title: "37",
        description: "420x Button Power.",
        cost: new Decimal(1e144),
        unlocked() {
            return hasUpgrade("b", 31)
        
        }
        },
        33: { title: "38",
        description: "1,000x Points.",
        cost: new Decimal(1e151),
        unlocked() {
            return hasUpgrade("b", 32)
        
        }
        },
        34: { title: "39",
        description: "1,000x Button Power.",
        cost: new Decimal(1e161),
        unlocked() {
            return hasUpgrade("b", 33)
        
        }
        },
        35: { title: "40",
        description: "More Prestige Point Upgrades.",
        cost: new Decimal(1e169),
        unlocked() {
            return hasUpgrade("b", 34)
        
        }
        },
        41: { title: "41",
        description: "Gain ^1.01 Prestige Points.",
        cost: new Decimal("1e1503"),
        unlocked() {
            return hasUpgrade("g", 25)
        
        }
        },
        42: { title: "42",
        description: "Gain ^1.05 Prestige Points.",
        cost: new Decimal("1e1525"),
        unlocked() {
            return hasUpgrade("b", 41)
        
        }
        },
        43: { title: "43",
        description: "Gain ^1.01 Button Power.",
        cost: new Decimal("1e1630"),
        unlocked() {
            return hasUpgrade("b", 42)
        
        }
        },
        44: { title: "44",
        description: "Gain ^1.03 Button Power.",
        cost: new Decimal("1e1640"),
        unlocked() {
            return hasUpgrade("b", 43)
        
        }
        },
        45: { title: "45",
        description: "Gain 100x Grass.",
        cost: new Decimal("1e1666"),
        unlocked() {
            return hasUpgrade("b", 44)
        
        }
        },
        51: { title: "46",
        description: "Gain 1e20x Button Power.",
        cost: new Decimal("1e1670"),
        unlocked() {
            return hasUpgrade("b", 45)
        
        }
        },
        52: { title: "47",
        description: "Gain 1e15x Prestige Points.",
        cost: new Decimal("1e1785"),
        unlocked() {
            return hasUpgrade("b", 51)
        
        }
        },
        53: { title: "48",
        description: "Gain 1e10x Points.",
        cost: new Decimal("1e1850"),
        unlocked() {
            return hasUpgrade("b", 52)
        
        }
        },
        54: { title: "49",
        description: "Gain 1e5x Points.",
        cost: new Decimal("1e1920"),
        unlocked() {
            return hasUpgrade("b", 53)
        
        }
        },
        55: { title: "50",
        description: "^1.0015 Points.",
        cost: new Decimal("1e1950"),
        unlocked() {
            return hasUpgrade("b", 54)
        
        }
        },
    },
    challenges: {
        11: {
            name: "Pointless",
            challengeDescription: "Raise point gain to ^0.01.",
            goalDescription: "1.00e370 Points.",
            rewardDescription: "Gain 1e69x Points.",
            canComplete: function() {return player.points.gte("e370")},
            unlocked() { return (hasMilestone('f', 5)) },
        },
        12: {
            name: "Prestigeless",
            challengeDescription: "Raise Prestige Point gain to ^0.001.",
            goalDescription: "1e71,300 Points.",
            rewardDescription: "Gain ^1.01 Prestige Points.",
            canComplete: function() {return player.points.gte("e71300")},
            unlocked() { return (hasChallenge('b', 11)) },
        },
        13: {
            name: "Productionless",
            challengeDescription: "Raise Prestige Point and Point gain to ^0.001.",
            goalDescription: "1.00e53 Points.",
            rewardDescription: "Gain ^1.1 Prestige Points, 1e69x Points and unlock more cup upgrades.",
            canComplete: function() {return player.points.gte("e53")},
            unlocked() { return (hasChallenge('b', 12)) },
            },
        },
    name: "Button", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#1380D0",
    requires: new Decimal(10000), // Can be a function that takes requirement increases into account
    resource: "Button Power", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["p"],
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('p', 22)) mult = mult.times(upgradeEffect('p', 22))
        if (hasUpgrade('p', 31)) mult = mult.times(10)
        if (hasUpgrade('a', 21)) mult = mult.times(69)
        if (hasUpgrade('b', 32)) mult = mult.times(420)
        if (hasUpgrade('b', 34)) mult = mult.times(1000)
        if (hasUpgrade('p', 44)) mult = mult.times(100000)
        if (hasUpgrade('p', 51)) mult = mult.times(1000000)
        if (hasUpgrade('p', 54)) mult = mult.times(10000000)
        if (hasUpgrade('p', 55)) mult = mult.times(1000000)
        if (hasUpgrade('g', 14)) mult = mult.times(1e10)
        if (hasUpgrade('b', 43)) mult = mult.pow(1.01)
        if (hasUpgrade('b', 44)) mult = mult.pow(1.03)
        if (hasUpgrade('b', 51)) mult = mult.times(1e20)
        if (hasUpgrade('a', 31)) mult = mult.times(1e42)
        if (hasUpgrade('a', 34)) mult = mult.times(1e25)
        if (hasUpgrade('c', 14)) mult = mult.times(1e15)
        if (hasUpgrade('g', 31)) mult = mult.pow(1.01)
        if (hasUpgrade('g', 33)) mult = mult.times(1e69)
        if (hasUpgrade('d', 14)) mult = mult.times(1e32)
        if (hasUpgrade('d', 22)) mult = mult.pow(1.02)
        if (hasUpgrade('d', 25)) mult = mult.times(1e100)
        if (hasUpgrade('c', 32)) mult = mult.pow(1.04)
        if (hasUpgrade('a', 52)) mult = mult.times(1e100)
        if (hasUpgrade('d', 35)) mult = mult.pow(1.05)
        if (hasUpgrade('d', 35)) mult = mult.times("1.79e308")
        if (hasUpgrade('f', 14)) mult = mult.times(1e123)
        if (hasUpgrade('c', 42)) mult = mult.times("1.79e308")
        if (hasUpgrade('g', 42)) mult = mult.pow(1.01)
        if (inChallenge("g", 11)) mult = mult.pow(0.001)
        if (hasChallenge("g", 11)) mult = mult.times("1e666")
        if (inChallenge("g", 12)) mult = mult.pow(0.0001)
        if (hasChallenge("g", 12)) mult = mult.pow("1.05")
        if (inChallenge("g", 12)) mult = mult.pow(0.1)
        if (hasChallenge("g", 21)) mult = mult.pow("1.03")
        if (inChallenge("g", 22)) mult = mult.pow(0.000001)
        if (inChallenge("c", 11)) mult = mult.pow(0.0001)
        if (hasChallenge("c", 11)) mult = mult.times("1e1337")
        if (inChallenge("c", 12)) mult = mult.pow(0.125)
        if (inChallenge("c", 22)) mult = mult.pow(0.0145)
        if (hasUpgrade('e', 23)) mult = mult.pow(2)
        if (hasUpgrade('e', 32)) mult = mult.pow(3)
        if (inChallenge("f", 11)) mult = mult.pow(0.001)
        if (inChallenge("f", 12)) mult = mult.pow(0.1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "B: Reset for button power", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    passiveGeneration() { return (hasMilestone("g", 1)&&player.current!="b")?1:0 },
    passiveGeneration() { return (hasMilestone("f", 1)&&player.current!="b")?1:0 },
    layerShown(){return (hasUpgrade("p", 15) || player[this.layer].unlocked)}

    
})