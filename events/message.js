const config = require('../config.json');
module.exports = message => {

  let client = message.client;
	if (!message.content.startsWith(config.prefix)) return;
  if (message.author.id !== client.user.id) return;
  const args = message.content.split(' ')
  const command = message.content.substring(config.prefix.length + command.length + 1);

	try {
		let cmdFile = require(`../commands/${command}`);
		cmdFile.run(client, message, args);
	} catch (err) {
		console.log(`Command ${command} failed\n${err.stack}`);
	}
};