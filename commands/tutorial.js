module.exports = {
	name: 'tutorial',
	description: 'แสดงวิธีใช้ bot ตัวนี้',
	execute(message, args) {
		var messageOut = [];
		messageOut.push("List คำสั่ง bot ตัวนี้: ");
		messageOut.push("!ชม เพื่อสุ่มคำชมทุกเพศ ");
		messageOut.push("!ชม ช เพิ่อสุ่มคำชมผู้ชาย ");
		messageOut.push("!ชม ญ เพิ่อสุ่มคำชมผู้หญิง ");
		message.Out.push("-----------------------------");
		messageOut.push("!ชม @ชื่อคน เพื่อชม @คนๆนั้นแบบสุ่มๆ");
		messageOut.push("!ชม ช @ชื่อคน เพื่อชม @ผู้ชายคนนั้น");
		messageOut.push("!ชม ญ @ชื่อคน เพื่อชม @ผู้หญิงคนนั้น");

		message.channel.send(messageOut);
	},
};