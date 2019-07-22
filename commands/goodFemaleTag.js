module.exports = {
	name: 'gFemaleTag',
	description: 'แสดงข้อความดีแบบชมเพศชาย',
	execute(message, args) {
        const taggedUser = message.mentions.users.first().id;
        var RandNumber = parseInt(Math.random() * 3);
        console.log("Option: " + RandNumber + " Male: " + message.mentions.users.id);
        var MentionedName = "<@" + taggedUser + ">";
        var GoodMessage = {
            0: "วันนี้คุณดูสวยมากเลย " + MentionedName,
            1: "เกิดมาชาตินี้ไม่เคยเจอใครสวยเท่าคุณมาก่อนเลย " + MentionedName,
            2: "สิ่งเดียวที่ทำให้ผมตาบอดได้คือความสดใสของเธออ่ะ " + MentionedName
        }
        message.channel.send(GoodMessage[RandNumber]);
	},
};