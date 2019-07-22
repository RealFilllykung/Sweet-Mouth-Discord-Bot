module.exports = {
	name: 'gMaleTag',
	description: 'แสดงข้อความดีแบบชมเพศชาย',
	execute(message, args) {
        const taggedUser = message.mentions.users.first().id;
        var RandNumber = parseInt(Math.random() * 2);
        console.log("Option: " + RandNumber + " Male: " + message.mentions.users.id);
        var MentionedName = "<@" + taggedUser + ">";
        var GoodMessage = {
            0: "วันนี้คุณดูดีมากเลย " +MentionedName,
            1: "ทำไมวันนี้หล่อจัง " + MentionedName
        }
        message.channel.send(GoodMessage[RandNumber]);
	},
};