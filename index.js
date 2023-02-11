const express = require('express');
const app = express();
const port = 3030;


const { Client, MessageEmbed } = require('discord.js');
const client = new Client;
const fs = require('fs');
const { TOKEN, CHANNELID, CHANNELID_CHECK } = require('./config.json');
const picExt = [".webp", ".png", ".jpg", ".jpeg", ".gif"];
const videoExt = [".mp4", ".webm", ".mov"];

app.get('/', (req, res) => res.send('ok rồi QC'));

app.listen(port, () => console.log(`Đã hoạt động dưới port ${port}`));

client.on('ready', () => {
    console.log(`${client.user.username} đã sẵng sàng !`);
    client.user.setPresence({
        activity: {
            name: 'Bạn chỉ cần gửi tin nhắn đến tôi, tôi sẽ giúp bạn truyền đạt đến mọi người bằng cách ẩn danh !!!'
        },
        status: 'online',
    });
})

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.channel.type !== 'dm') return;
    if (message.content.length > 1024) return message.channel.send('Confession chỉ được dưới 1024 kí tự. Cảm ơn');
    else {
        await message.react('♥️');
        message.channel.send('Đã gửi confession cho Family thành công !');
        let count = JSON.parse(fs.readFileSync('./count.json')).count;
        count++;
        const cfsChannel = client.channels.cache.get(CHANNELID);
        const cfsChannelcheck = client.channels.cache.get(CHANNELID_CHECK);
        if (!cfsChannel) return;
        if (!cfsChannelcheck) return;

        // dịnh dang thu gui
        const embed = new MessageEmbed()
            .setTitle('Confession')
            .setDescription(`\n\n${message.content}\n`)
            .setFooter(`Đây là tâm thư của một bạn trong Family ♥️ `, client.user.displayAvatarURL());

        // check
        const embed2 = new MessageEmbed()
            .setDescription(`Confession số : ${count}\n\n${message.content}\n`)
            .setFooter(`Đây là tâm thư của một bạn trong Family ♥️ ${message.author.tag}`, client.user.displayAvatarURL());

        // anh va video
        if (message.attachments.array().length > 0) {
            let attachment = message.attachments.array()[0];
            picExt.forEach(ext => {
                if (attachment.name.endsWith(ext)) embed.setImage(attachment.attachment);
            });
            videoExt.forEach(ext => {
                if (attachment.name.endsWith(ext)) cfsChannel.send(attachment);
            });
        }

        cfsChannel.send(embed);
        cfsChannelcheck.send(embed2);

        fs.writeFileSync('./count.json', JSON.stringify({ count: count }));
    }

})
client.login(TOKEN)