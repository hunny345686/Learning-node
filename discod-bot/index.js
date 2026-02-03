//

import { Client, Events, GatewayIntentBits } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent], });

client.on("messageCreate", (msg) => {
    if (msg.author.bot) return
    msg.reply({
        content: 'Hello from the bot data '
    })

})

client.login("API_KEY")