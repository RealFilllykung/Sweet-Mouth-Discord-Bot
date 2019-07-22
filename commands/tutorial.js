module.exports = {
	name: 'tutorial',
	description: 'แสดงวิธีใช้ bot ตัวนี้',
	execute(message, args) {
		var messageOut = [];
		messageOut.push("List คำสั่ง bot ตัวนี้: ");
		messageOut.push("!ชม เพื่อสุ่มคำชมทุกเพศ ");
		messageOut.push("!ชม ช เพิ่อสุ่มคำชมผู้ชาย ");
		messageOut.push("!ชม ญ เพิ่อสุ่มคำชมผู้หญิง ");

		message.channel.send(messageOut);
	},
};