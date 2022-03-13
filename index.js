const Discord = require(`discord.js`)
global.client = new Discord.Client({
    intents: 32767
})

client.login(process.env.token)

client.on('ready', () => {
    client.user.setActivity(`${client.guilds.cache.size} servers`, { type: 'WATCHING' }); 
})

const fs = require("fs")
client.commands = new Discord.Collection()

const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandsFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

client.on("ready", () => {
    client.guilds.cache.forEach(guild => {
        client.commands.forEach(command => {
            guild.commands.create(command.data)
        })
    })
})

client.on("interactionCreate", interaction => {
    if (!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)
    if (!command) return

    command.execute(interaction)
})

client.on("ready", () => {
    console.log("--------------------\n📢 Announcer Loaded\n--------------------");
})
