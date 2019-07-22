// Use fs
const fs = require('fs');

// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// use Discord collections
client.commands = new Discord.Collection();

// link the commandFiles to the file inside folder commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Put file into commandFiles
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//import ค่าจาก config เข้ามาใส่ในไฟล์ index.js
const {prefix, token} = require('./config.json');

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});


//มันจะขึ้น chat ของ user ใน console VSCode
client.on('message', message => {
    //console.log(message.content);

//--------------- โซนวิธีที่โปรแกรมทำงาน ---------------
    //ถ้า user ไม่ได้ใส่ ! ก่อนคำสั่ง
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    //scope try catch ของการรับข้อความ
    try{
        //ถ้าเกิด user พิมพ์คำว่า !ชม
        if(command === ''){
            client.commands.get('tutorial').execute(message,args);
        }
        else if(command === 'ชม'){
            //ถ้า user พิมพ์คำว่า !ชม โดยที่ไม่มีอะไรพิมพ์ตามมาเพิ่ม
            if(args.length === 0){
                client.commands.get('gGeneral').execute(message,args);
            }

            //ถ้า user ใส่ argument มา 1 ตัว
            else if (args.length >= 1){
                if(args.length === 1){
                    //ถ้า user พิมพ์คำว่า !ชม ช
                    if (args[0] === 'ช'){
                        client.commands.get('gMale').execute(message,args);
                    }
                    //ถ้า user พิมพ์คำว่า !ชม ญ
                    else if (args[0] === 'ญ'){
                        client.commands.get('gFemale').execute(message,args);
                    }
                    //ถ้าเป็นคำสั่งที่ Bot ไม่รู้จัก
                    else{
                        message.channel.send("ตอนนี้ยังไม่รองรับคำสั่ง !" + command + " " + args[0]);
                    }
                }
                /*
                //Feature นี้ยังไม่ได้เริ่มทำ
                //ถ้า user ใส่ argument !ชม ... @ชื่อคน
                else if (args.length === 2){
                    
                }*/
                //ถ้าเป็นคำสั่งที่ Bot ไม่รู้จัก
                else{
                    message.channel.send("ตอนนี้ยังไม่รองรับคำสั่ง !" + command + " " + args[0] + " @ชื่อคน");
                }
            }
        }
    }
    catch (e){
        message.channel.send("ตอนนี้ยังไม่รองรับคำสั่ง !" + command);
    }

});


// login to Discord with your app's token
client.login(token);