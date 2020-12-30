"use strict";
// study student ts prior to making, attempt without looking.
// name, email, phone number
var Friend = /** @class */ (function () {
    function Friend(name, age, phoneNumber, email) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    Friend.prototype.print = function () {
        console.log(this.name + "|" + this.age + "|" + this.phoneNumber + "|" + this.email);
    };
    return Friend;
}());
var friends = [
    new Friend("Joanna", 27, "Joanna@email.com", "123-456-7890"),
    new Friend("Jerod", 34, "Jerod@email.com", "012-345-6789"),
    new Friend("Kevin", 55, "Kevin@email.com", "987-654-3210"),
    new Friend("Ken", 34, "Ken@email.com", "456-123-7980"),
    new Friend("Rich", 30, "Rich@email.com", "789-456-1230"),
    new Friend("Noah", 26, "Noah@email.com", "654-987-1320")
];
friends.push(new Friend("Leigha", 30, "Leigha@email.com", "518-123-4567"));
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    friend.print();
}
