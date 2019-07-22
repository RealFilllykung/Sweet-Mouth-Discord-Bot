module.exports = {
	name: 'gGeneralTag',
	description: 'แสดงข้อความดีแบบชมเพศชาย',
	execute(message, args) {
        const taggedUser = message.mentions.users.first().id;
        var RandNumber = parseInt(Math.random() * 5);
        console.log("Option: " + RandNumber + " Male: " + message.mentions.users.id);
        var MentionedName = "<@" + taggedUser + ">";
        var GoodMessage = {
            0: "วันนี้คุณดูดีมากเลย " + MentionedName,
            1: "วันนี้คุณดูสวยมากเลย " + MentionedName,
            2: "เกิดมาชาตินี้ไม่เคยเจอใครสวยเท่าคุณมาก่อนเลย " + MentionedName,
            3: "สิ่งเดียวที่ทำให้ผมตาบอดได้คือความสดใสของเธออ่ะ " + MentionedName,
            4: "น่ารักจังงงง " + MentionedName
        }
        message.channel.send(GoodMessage[RandNumber]);
	},
};