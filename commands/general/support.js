const Discord = require(`discord.js`)

module.exports = {
    name: "support",
    data: {
        name: "support",
        description: "Support Server | Join to the support and help server"
    },

    execute(interaction) {
        let helpembed = new Discord.MessageEmbed()
        .setTitle("Support & Help SERVER")
        .setDescription("https://discord.gg/4w9AbcghXj")
        .setFooter("Announcer")
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/949741526941069312/announcerlogo.png")
        .setColor("#0a5c8c")

        interaction.reply({ embeds: [helpembed], ephemeral: true })
    }
}