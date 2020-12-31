"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friend_1 = require("./friend");
var friends = [
    new friend_1.Friend("Joanna", 27, "Joanna@email.com", "123-456-7890"),
    new friend_1.Friend("Jerod", 34, "Jerod@email.com", "012-345-6789"),
    new friend_1.Friend("Kevin", 55, "Kevin@email.com", "987-654-3210"),
    new friend_1.Friend("Ken", 34, "Ken@email.com", "456-123-7980"),
    new friend_1.Friend("Rich", 30, "Rich@email.com", "789-456-1230"),
    new friend_1.Friend("Noah", 26, "Noah@email.com", "654-987-1320")
];
friends.push(new friend_1.Friend("Leigha", 30, "Leigha@email.com", "518-123-4567"));
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    friend.print();
}
