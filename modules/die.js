export class PlotDie extends DiceTerm {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @inheritdoc */
    static DENOMINATION = "p";
	
	/** @inheritdoc */
  static MODIFIERS = {
    "r": Die.prototype.reroll,
    "rr": Die.prototype.rerollRecursive,
    "k": Die.prototype.keep,
    "kh": Die.prototype.keep,
    "kl": Die.prototype.keep,
    "d": Die.prototype.drop,
    "dh": Die.prototype.drop,
    "dl": Die.prototype.drop
  }

//    /** @inheritdoc */
//    get total(){
//        return this.results.length;
//    }

  /* -------------------------------------------- */

  /** @inheritdoc */
  roll({minimize=false, maximize=false}={}) {
    const roll = {result: undefined, active: true};
    if ( minimize ) roll.result = 0;
    else if ( maximize ) roll.result = 2;
    else roll.result = Math.ceil((CONFIG.Dice.randomUniform() * this.faces));
    this.results.push(roll);
    return roll;
  }
    /* -------------------------------------------- */

    /** @inheritdoc */
    getResultLabel(result) {
        return {
            1: '<img alt="Complication(2)" width="40" height="40" src="modules/stormlight-plot-die/images/C2_inCHAT.png" />',
            2: '<img alt="Complication(4)" width="40" height="40" src="modules/stormlight-plot-die/images/C4_inCHAT.png" />',
            3: '<img alt="Blank" width="40" height="40" src="modules/stormlight-plot-die/images/Bl_inCHAT.png" />',
            4: '<img alt="Blank" width="40" height="40" src="modules/stormlight-plot-die/images/Bl_inCHAT.png" />',
            5: '<img alt="Opportunity" width="40" height="40" src="modules/stormlight-plot-die/images/Op_inCHAT.png" />',
            6: '<img alt="Opportunity" width="40" height="40" src="modules/stormlight-plot-die/images/Op_inCHAT.png" />'
        }[result.result];
    }
}