const Discord = require(`discord.js`)

module.exports = {
    name: "announcemessage",
    data: {
        name: "announcemessage",
        description: "Announce command in message | Announce the news for your server in message",
        options: [
            {
                name: "channel",
                description: "Insert a channel to send announce",
                type: "CHANNEL",
                required: true
            },
            {
                name: "announce",
                description: "Insert a announce",
                type: "STRING",
                required: true
            },
        ]
    },

    execute(interaction) {

        const noperms = new Discord.MessageEmbed()
.setTitle("Not Permissions!")
.setDescription("Hey User! You are not have the `ADMINISTRATOR` permissions in this server!")
.setFooter("Announcer")
.setTimestamp()
.setColor("DARK_RED")

            if(!interaction.member.permissions.has("ADMINISTRATOR")) {
                return interaction.reply({ embeds: [noperms], ephemeral: true })
            }
    
            let announces = interaction.options.getString("announce") 
            let canale = interaction.options.getChannel("channel") 
    
            canale.send(announces)
            interaction.reply({ content: "You have successfully sent the announce!", ephemeral: true})
        }
    }