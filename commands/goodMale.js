module.exports = {
	name: 'gMale',
	description: 'แสดงข้อความดีแบบชมเพศชาย',
	execute(message, args) {
        var RandNumber = parseInt(Math.random() * 2);
        console.log("Option: " + RandNumber + " Male: " + message.author.id);
        var MentionedName = "<@" + message.author.id + ">";
        var GoodMessage = {
            0: "วันนี้คุณดูดีมากเลย " + MentionedName,
            1: "ทำไมวันนี้หล่อจัง " + MentionedName
        }
        message.channel.send(GoodMessage[RandNumber]);
	},
};