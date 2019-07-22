module.exports = {
	name: 'tutorial',
	description: 'แสดงวิธีใช้ bot ตัวนี้',
	execute(message, args) {
		message.channel.send("List คำสั่ง bot ตัวนี้: \n");
        message.channel.send("!ชม เพื่อสุ่มคำชมทุกเพศ \n");
        message.channel.send("!ชม ช เพิ่อสุ่มคำชมผู้ชาย \n");
        message.channel.send("!ชม ญ เพิ่อสุ่มคำชมผู้หญิง \n");
	},
};