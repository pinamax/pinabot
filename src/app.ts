import * as discord from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const bot = new discord.Client();
bot.on('ready', () => console.log('Bot is ready'));

// Adds a role to new users
bot.on('guildMemberAdd', member => {
    member.addRole(member.guild.roles.find((role => role.name === process.env.DEFAULT_ROLE)));
    console.log(`${member.nickname} has now the ${process.env.DEFAULT_ROLE} role`);
});

bot.login(process.env.TOKEN);