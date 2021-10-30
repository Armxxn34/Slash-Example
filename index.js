
const Discord = require('discord.js')
const fs = require('fs');

const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
console.log('online')
     const activities = [
    `Commands`,
    `Slash`,
    `Armxxn34`
    //y'all can add more ig
  ];
  let i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: `LISTENING` }), 5000);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return; 
const timer = ms => new Promise( res => setTimeout(res, ms));

if(command.cooldowns != undefined && command.cooldown == undefined || command.cooldowns == undefined && command.cooldown != undefined) {
                console.error(`${command.data.name} has not got a cooldowns list but does have a cooldown. Fix this.`)
            }
            if(command.cooldowns != undefined) {
                if(command.cooldowns.has(interaction.member.id)) {
                    return await interaction.reply("")
                      console.log(cooldowns)
                }
            }

	try {
		await command.execute(interaction);
if(command.cooldowns != undefined && command.cooldown != undefined){

                    command.cooldowns.add(interaction.member.id)
    
                    await timer(command.cooldown * 1000)
        
                    command.cooldowns.delete(interaction.member.id)
}               
	} catch (error) {
		console.error(error)
		return interaction.reply({ content: 'error occured' ephemeral: true });
	}
});

client.login(token);
