 const Discord = require('discord.js');
 require('dotenv').config();
 const bot = new Discord.Client();
 const token = process.env.TOKEN;

 const prefix = "jet"`
 const ms = require('ms');

 var http = require('http');

  http.createServer(function (req, res){
    rest.write("I'm alive");
    res.end();
  }).listen(8080);

  bot.on('ready'. () =>{

    console.log('ypur bot is now online.')
    
  }}