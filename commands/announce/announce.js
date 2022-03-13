const Discord = require(`discord.js`)

module.exports = {
    name: "announce",
    data: {
        name: "announce",
        description: "Announce command | Announce the news for your server",
        options: [
            {
                name: "channel",
                description: "Insert a channel to send announce",
                type: "CHANNEL",
                required: true
            },
            {
                name: "title",
                description: "Insert a title",
                type: "STRING",
                required: true
            },
            {
                name: "description",
                description: "Insert a description",
                type: "STRING",
                required: true
            },
                                {
                name: "color",
                description: "Insert a embed color",
                type: "STRING",
                required: false
            },
            {
                name: "footer",
                description: "Insert a footer",
                type: "STRING",
                required: false
            }
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
    
            let title = interaction.options.getString("title") 
            let canale = interaction.options.getChannel("channel") 
            let description = interaction.options.getString("description")
            let footer = interaction.options.getString("footer") || ""
            let color = interaction.options.getString("color") || "#2F3136"
    
            let announced = new Discord.MessageEmbed()
            .setTitle(title)
            .setDescription(description)
            .setImage(image)
            .setThumbnail(thumbmail)
            .setFooter(footer)
            .setColor(color)
    
            canale.send({ embeds: [announced]})
            interaction.reply({ content: "You have successfully sent the announce!", ephemeral: true})
        }
    }