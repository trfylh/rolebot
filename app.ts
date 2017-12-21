/*
  A bot that welcomes new guild members when they join
*/

//

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = '';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
    console.log('CalRoleBot is ready!');
});

// Create an event listener for messages
client.on('message', message => {
    // If the message is "set CS" for Admin testing
    if (message.content === 'SET CS' || message.content === 'set CS' || message.content === 'Set CS' || message.content === 'Set Cs' || message.content === 'set Cs' || message.content === 'set cs' || message.content === 'Set cs' ) {
        // Starts process
        message.member.addRole("308027072658407424");
    }

    if (message.content === 'SET EECS' || message.content === 'set EECS' || message.content === 'Set EECS' || message.content === 'Set Eecs' || message.content === 'set Eecs' || message.content === 'set eecs' || message.content === 'Set eecs') {
        // Starts process
        message.member.addRole("308026936565956609");
    }

});

// Log our bot in
client.login(token);
