export class DiePlot extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "p";

    /** @override */
    get total(){
        return this.results.length;
    }

    /* -------------------------------------------- */

    /** @override */
    getResultLabel(result) {
        return {
            "1": '<img src="modules/stormlight-plot-die/images/C2_inCHAT.png" />',
            "2": '<img src="modules/stormlight-plot-die/images/C4_inCHAT.png" />',
            "3": '<img src="modules/stormlight-plot-die/images/Bl_inCHAT.png" />',
            "4": '<img src="modules/stormlight-plot-die/images/Bl_inCHAT.png" />',
            "5": '<img src="modules/stormlight-plot-die/images/Op_inCHAT.png" />',
            "6": '<img src="modules/stormlight-plot-die/images/Op_inCHAT.png" />'
        }[result.result];
    }
}