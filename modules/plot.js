import {PlotDie} from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["p"] = PlotDie;
	CONFIG.Dice.types.push(PlotDie);
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"stormlight-plot-die",name:"Stormlight RPG Plot Die"},true);
    dice3d.addDicePreset({
      type:"dp",
      labels:[
        'modules/stormlight-plot-die/images/C2.png', 
        'modules/stormlight-plot-die/images/C4.png', 
        'modules/stormlight-plot-die/images/Bl.png',
		'modules/stormlight-plot-die/images/Bl.png', 
        'modules/stormlight-plot-die/images/Op.png', 		
        'modules/stormlight-plot-die/images/Op.png'
      ],
      bumpMaps:[
        'modules/stormlight-plot-die/images/C2_bump.png', 
        'modules/stormlight-plot-die/images/C4_bump.png', 
        'modules/stormlight-plot-die/images/Bl_bump.png',
        'modules/stormlight-plot-die/images/Bl_bump.png',		
        'modules/stormlight-plot-die/images/Op_bump.png',
		'modules/stormlight-plot-die/images/Op_bump.png'
      ],
      system:"stormlight-plot-die"
    });
});