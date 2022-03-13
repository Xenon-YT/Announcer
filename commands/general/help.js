const Discord = require(`discord.js`)

module.exports = {
    name: "help",
    data: {
        name: "help",
        description: "Help command | View all commands on this menù"
    },

    execute(interaction) {
        let helpembed = new Discord.MessageEmbed()
        .setTitle("HELP - Announcer Support")
        .addField("📢 /announce [title] [description] [footer]", "Use this command for public announce", false)
        .addField("📁 /help", "Use this commands for help")
        .addField("🗣️ /support", "Use this commands for join on the official server for support")
        .addField("🖇️ /invite", "Invite this bot on your server!")
        .setFooter("Announcer")
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/949741526941069312/announcerlogo.png")
        .setColor("#0a5c8c")

        interaction.reply({ embeds: [helpembed]})
    }
}