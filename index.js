const Discord = require("discord.js");
const client = new Discord.Client();

var cdArray = [1]

var funny2 = [
'https://i.imgur.com/tobA755.png', 
'https://i.imgur.com/y3ALudX.png', 
'https://i.imgur.com/ZiqGkrC.png',
'https://i.imgur.com/BpknUr0.png',
'https://i.imgur.com/Cwjw1y3.png',
'https://giphy.com/gifs/cat-moment-remember-8vQSQ3cNXuDGo',
'https://giphy.com/gifs/JIX9t2j0ZTN9S',
'https://www.tenor.co/uHKj.gif',
'https://i.imgur.com/CBYNi6e.png',
'https://giphy.com/gifs/love-vs-story-BwOJFlmYQL36U',
'https://i.imgur.com/5MiANtl.png',
'https://i.imgur.com/JuAjdJe.png',
'https://i.imgur.com/xop7WbJ.png',
'https://i.imgur.com/tjlyRJt.png',
'https://i.imgur.com/YkRvNlv.png',
'https://i.imgur.com/ghfjtE7.png',
'https://i.imgur.com/Yc1aWtb.png',
'https://i.imgur.com/GokUI7V.png',
'https://i.imgur.com/je6bTrS.png',
'https://i.imgur.com/XdvyG4L.png',
'https://i.imgur.com/AFLxnZb.png',
'https://i.imgur.com/Pp4fzUm.png',
'https://i.imgur.com/4N4cu39.png',
'https://i.imgur.com/ZoIMGPm.png',
'https://www.lifewire.com/thmb/aL1RRppTwcccVnWCnKORvM13Sv4=/806x640/filters:no_upscale():max_bytes(150000):strip_icc()/Cat9_canhaz-5aab0850ff1b78003653a2eb.jpg',
'http://liftmeupmag.com/wp-content/uploads/2018/04/19-hilarious-cat-memes-that-are-impawsible-not-to-laugh-at-11.jpg',
'https://i.imgur.com/rSPJVLR.png',
'https://i.imgur.com/4koFhr8.png',
'https://i.imgur.com/WW4dizn.png',
'https://i.imgur.com/FdrciJj.png',
'https://i.imgur.com/eTMQwrg.png',
'https://i.imgur.com/YBOmXCD.png',
'https://i.imgur.com/CHqQZFI.png',
'https://i.imgur.com/JXYG5kb.png',
'https://i.imgur.com/Y1MKvPF.png',
'https://i.imgur.com/vTJapYl.png',
'https://i.imgur.com/NrWo2Rg.png',
'https://i.imgur.com/tMYai3W.png',
'https://i.imgur.com/vCWo8h5.png',
'https://i.imgur.com/MkTH2FB.png',
'https://i.imgur.com/qSMna85.png',
'https://i.imgur.com/CtkqSc9.png',
'https://i.imgur.com/f3Tc7Qg.png',
'https://i.imgur.com/Ck9034t.png',
'https://i.imgur.com/tsoDtue.png',
'https://i.imgur.com/1N9PBoh.png',
'https://i.imgur.com/u5dA9oW.png',
'https://i.imgur.com/IKHAvkv.png',
'https://i.imgur.com/fzEo2Z0.png',
'https://i.imgur.com/2LU91Qj.png',
'https://i.imgur.com/Zk8gqun.png',
'https://i.imgur.com/OduY4lg.png',
'https://i.imgur.com/K7vNwZj.png',
'https://i.imgur.com/SczpCH1.png',
'https://i.imgur.com/pJ1BA5U.png',
'https://i.imgur.com/dLlYJGJ.png',
'https://i.imgur.com/nLwrQsI.png',
'https://i.imgur.com/fylEJjl.png',
'https://i.imgur.com/sb6pJ3i.png',
'https://i.imgur.com/n3SHvxA.png',
'https://i.imgur.com/YImvN9w.png',
'https://i.imgur.com/hpLbvBT.png',
'https://i.imgur.com/2u8gQfs.png',
'https://i.imgur.com/P0coFAO.png',
'https://i.imgur.com/n2h1AEQ.png',
'https://i.imgur.com/xvy7a3b.png',
'https://i.imgur.com/fqISIoM.png',
'https://i.imgur.com/z0Sz8VY.png',
'https://i.imgur.com/IP76fca.png',
'https://i.imgur.com/j0CDuZk.png',
'https://i.imgur.com/9h4PSB6.png',
'https://i.imgur.com/NdlaYUK.png',
'https://i.imgur.com/jjVEXCm.png',
'https://i.imgur.com/rt3APcg.png',
'https://i.imgur.com/IUVBa8H.png',
'https://i.imgur.com/wfmEW5h.png',
'https://i.imgur.com/sFWmVW4.png',
'https://i.imgur.com/zflEqrr.png',
'https://i.imgur.com/kT1Ri8L.png',
'https://i.imgur.com/xTkolYV.png',
'https://i.imgur.com/2j7gFp3.png',
'https://i.imgur.com/GV0sOS4.png',
'https://i.imgur.com/Fv8ZzCt.png',
'https://i.imgur.com/hGodChj.png',
'https://i.imgur.com/nQQuJjk.png',
'https://i.imgur.com/M4JWfif.png',
'https://i.imgur.com/T1ZU3XG.png',
'https://i.imgur.com/olr1AuU.png',
'https://i.imgur.com/JRpmGyB.png',
'https://i.imgur.com/Lqvf5wB.png',
'https://i.imgur.com/T3WDq1v.png',
'https://i.imgur.com/nEUIZMV.png',
'https://i.imgur.com/y7w1Zpz.png',
'https://i.imgur.com/tLqmRcy.png',
'https://i.imgur.com/evBR1CL.png',
'https://i.imgur.com/boMgPjG.png',
'https://i.imgur.com/LlsjFvJ.png',
'https://i.imgur.com/g5pMpO5.png',
'https://i.imgur.com/v2zHoC2.png',
'https://i.imgur.com/lHaouBV.png',
]

var commandchooser = null

client.on('message', function(message){ 
    if(message.content.startsWith('hello, nathan')){message.reply("hello! How are you?")}
    if(message.content.startsWith('hello nathan')){message.reply("hello! How are you?")}
    if(message.content.startsWith('nathan, say hello')){message.channel.send("Hello!")}
    if(message.content.startsWith('/BAN')){message.channel.send("https://i.imgur.com/oxN18eI.png")}
    if(message.content.startsWith('/thonking')){message.channel.send("https://imgur.com/cxzMJG9")}
    if(message.content.startsWith('/stop')){message.channel.send("https://i.imgur.com/cHz3KgY.png")}
    if(message.content.startsWith('/fits')){message.channel.send("https://giphy.com/gifs/giphyqa-iGAXf0OlUUMYo")}
    if(message.content.startsWith('/no')){message.channel.send("https://giphy.com/gifs/reaction-LSmULmByAQHQs")}
    if(message.content.startsWith('/minesbigger')){message.channel.send("https://i.imgur.com/fTK5xwl.png")}
    if(message.content.startsWith('bot!')){message.reply("What?! Where?!")}
    if(message.content.startsWith('/derp')){message.reply("GET YOUR DERPS OFF THE TABLE! HOW DARE YOU?!")}
    if(message.content.startsWith('/dero')){message.reply("How dare you say that to me!")}
    if(message.content.startsWith('/BURN')){message.channel.send("https://giphy.com/gifs/fire-dark-burning-oZYBdbW7TnhEQ")}
    if(message.content.startsWith('/wtf?')){message.channel.send("I have no idea what you want from me.")}
    if(message.content.startsWith('/expandingthonk')){message.channel.send("https://imgur.com/X3IWMML")}
    if(message.content.startsWith('/fightme')){message.channel.send("https://i.imgur.com/7SaSdyF.png")}
    if(message.content.startsWith('/rng')){  commandchooser = Math.floor((Math.random() * 14) + 1)}
    if(commandchooser == 1){message.channel.send("Look! It's a walrus! https://i.imgur.com/bwPxIIT.png")
    commandchooser = null
    }
    if(commandchooser == 2){message.channel.send("Look! It's a pitbull! https://i.imgur.com/vQOnOES.png")
    commandchooser = null
    }
    if(commandchooser == 3){message.channel.send("Look! It's an ostrich! https://i.imgur.com/L8KCMtF.png")
    commandchooser = null
    }
    if(commandchooser == 4){message.channel.send("Look! It's a red-tailed hawk! https://i.imgur.com/k12yP9o.png")
    commandchooser = null
    }
    if(commandchooser == 5){message.channel.send("Look! It's a capybara! https://i.imgur.com/NzcHGU2.jpg")
    commandchooser = null
    }
    if(commandchooser == 6){message.channel.send("Nothing happened when you tried it. Here, let me try this time. /rng")
    commandchooser = null
    }
    if(commandchooser == 7){message.channel.send("Look! It's a Indonesian autumn adder! https://i.imgur.com/aUkTIQw.png")
    commandchooser = null
    }
    if(commandchooser == 8){message.channel.send("Look! It's a pangolin! https://i.imgur.com/qXyDjwq.png")
    commandchooser = null
    }
    if(commandchooser == 9){message.channel.send("Look! It's a massive pile of money! https://cdn.discordapp.com/attachments/485127453908402187/485272151230775297/massive_pile_of_money.png")
    commandchooser = null
    }
    if(commandchooser == 10){message.channel.send("Look! It's a Lamborghini Aventador! https://i.imgur.com/zGcW4fm.png")
    commandchooser = null
    }
    if(commandchooser == 11){message.reply("IT'S AN ARCTIC WOLF! RUN! https://i.imgur.com/24ZycnX.png")
    commandchooser = null
    }
    if(commandchooser == 12){message.channel.send("Look! It's a duck! https://i.imgur.com/ZmRPDey.png")
    commandchooser = null
    }
    if(commandchooser == 13){message.reply("you died. How unlucky. https://i.imgur.com/MgQnDVW.png")
    commandchooser = null
    }   
    if(commandchooser == 14){message.reply("IT'S A POLAR BEAR. RUN! https://i.imgur.com/J4zrrcs.png")
    commandchooser = null
    }
    if(commandchooser == 15){message.reply("you found a chest! But it's empty... https://i.imgur.com/S4xEDPv.jpg")
    commandchooser = null
    }   
    if(message.content.startsWith('Nothing happened when you tried it. Here, let me try this time. /rng')){message.channel.send("Look! It's a massive pile of money! https://cdn.discordapp.com/attachments/485127453908402187/485272151230775297/massive_pile_of_money.png")
    }
    
    if(message.content.startsWith('/funny')){randomnumbergenerated = Math.floor((Math.random() * 99) + 1)
        message.channel.send(funny2[randomnumbergenerated])
    }
    if (message.content.startsWith('/rolldice 20')){randomnumbergenerated = Math.floor((Math.random() * 20) + 1)
        message.reply([randomnumbergenerated])
    }
    if (message.content.startsWith('/roll d20')){randomnumbergenerated = Math.floor((Math.random() * 20) + 1)
        message.reply([randomnumbergenerated])
    }
    if (message.content.startsWith('/rolld20')){randomnumbergenerated = Math.floor((Math.random() * 20) + 1)
        message.reply([randomnumbergenerated])
    }
    if (message.content.startsWith('/rolldice 12')){randomnumbergenerated = Math.floor((Math.random() *12) + 1)
        message.reply([randomnumbergenerated])
    }
    if (message.content.startsWith('/roll d12')){randomnumbergenerated = Math.floor((Math.random() *12) + 1)
        message.reply([randomnumbergenerated])
    }
    if (message.content.startsWith('/rolld12')){randomnumbergenerated = Math.floor((Math.random() *12) + 1)
        message.reply([randomnumbergenerated])
    }
    if (message.content.startsWith('/rolldice 6')){randomnumbergenerated = Math.floor((Math.random() * 6) + 1)
        message.reply([randomnumbergenerated])
    }
    if (message.content.startsWith('/roll d6')){randomnumbergenerated = Math.floor((Math.random() * 6) + 1)
        message.reply([randomnumbergenerated])
    }
    if (message.content.startsWith('/rolld6')){randomnumbergenerated = Math.floor((Math.random() * 6) + 1)
        message.reply([randomnumbergenerated])
    }
    if (message.content.startsWith('/rolldice 4')){randomnumbergenerated = Math.floor((Math.random() *4) + 1)
        message.reply([randomnumbergenerated])
    }
    if (message.content.startsWith('/roll d4')){randomnumbergenerated = Math.floor((Math.random() *4) + 1)
        message.reply([randomnumbergenerated])
    }
    if (message.content.startsWith('/rolld4')){randomnumbergenerated = Math.floor((Math.random() *4) + 1)
        message.reply([randomnumbergenerated])
    }

    
    




    



    })


























































































    




































    client.login("NDgzNzkzNjU3Nzg3MzE4Mjcz.DmuZPg.lIPL2ctI3RTQgJDIo1X4s5NFpAw")



 
function newFunction(message) {
    if (message.content.startsWith('/rolldice 12')) {
        randomnumbergenerated = Math.floor((Math.random() * 12));
        message.reply([randomnumbergenerated]);
    }
}

