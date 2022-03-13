const Discord = require(`discord.js`)

module.exports = {
    name: "invite",
    data: {
        name: "invite",
        description: "Invite Command | Invite this commands on your discord server"
    },

    execute(interaction) {
        let inviter = new Discord.MessageEmbed()
        .setTitle("Invite this Bot!")
        .setDescription("https://discord.com/api/oauth2/authorize?client_id=950130264569413642&permissions=8&scope=bot%20applications.commands")
        .setFooter("Announcer")
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/949741526941069312/announcerlogo.png")
        .setColor("#0a5c8c")

        interaction.reply({ embeds: [inviter], ephemeral: true })
    }
}