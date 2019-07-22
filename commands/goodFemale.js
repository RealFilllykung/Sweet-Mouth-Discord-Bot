module.exports = {
	name: 'gFemale',
	description: 'แสดงข้อความดีแบบชมเพศหญิง',
	execute(message, args) {
        var RandNumber = parseInt(Math.random() * 3);
        console.log("Option: " + RandNumber + " Female: " + message.author.id);
        var MentionedName = "<@" + message.author.id + ">";
        var GoodMessage = {
            0: "วันนี้คุณดูสวยมากเลย " + MentionedName,
            1: "เกิดมาชาตินี้ไม่เคยเจอใครสวยเท่าคุณมาก่อนเลย " + MentionedName,
            2: "สิ่งเดียวที่ทำให้ผมตาบอดได้คือความสดใสของเธออ่ะ " + MentionedName
        }
        message.channel.send(GoodMessage[RandNumber]);
	},
};