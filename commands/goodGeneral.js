module.exports = {
	name: 'gGeneral',
	description: 'แสดงข้อความดีแบบสุ่มเพศ',
	execute(message, args) {
        var RandNumber = parseInt(Math.random() * 5);
        console.log("Option: " + RandNumber + " Random: " + message.author.id);
        var MentionedName = "<@" + message.author.id + ">";
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