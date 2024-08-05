import {DiePlot} from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["p"] = DiePlot;
});

Hooks.on('diceSoNiceRollComplete', (chatMessageID) => {
    let message = game.messages.get(chatMessageID);
    if(message.isAuthor){
        let ptRoll = false;
        message.roll.dice.forEach(dice => {
            if(dice instanceof DiePlot){
                ptRoll = true;
                dice.results.forEach(res => {
                    switch(res.result){
                        case 1:
                            defense++;
                            break;
                        case 2:
                            focus+=2;
                            break;
                        case 3:
                            success++;
                            break;
                        case 4:
                            success+=2;
                            break;
                        case 5:
                            focus++;
                            break;
                        case 6:
                            defense++;
                            break;
                    }
                });
            }
        });
        
        if(ptRoll){
            ChatMessage.create({
                content: `<b>Defense:</b> ${defense}<br><b>Success:</b> ${success}<br><b>Focus:</b> ${focus}`,
                whisper: message.data.whisper,
                blind: message.data.blind
            });
        }
    }
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"stormlight-plot-die",name:"Stormlight RPG Plot Die"},true);
    dice3d.addDicePreset({
      type:"ds",
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