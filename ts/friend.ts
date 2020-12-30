// study student ts prior to making, attempt without looking.
// name, email, phone number

class Friend {
    name:string;
    age:number;
    phoneNumber:string;
    email:string;

    constructor(name:string, age:number, phoneNumber:string, email:string) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    debug() {
        console.debug(`${this.name}|${this.age}|${this.phoneNumber}|${this.email}`);
    }
}

let friends:Friend[] = [
    new Friend("Joanna", 27, "Joanna@email.com", "123-456-7890"),
    new Friend("Jerod", 34, "Jerod@email.com", "012-345-6789"),
    new Friend("Kevin", 55, "Kevin@email.com", "987-654-3210"),
    new Friend("Ken", 34, "Ken@email.com", "456-123-7980"),
    new Friend("Rich", 30, "Rich@email.com", "789-456-1230"),
    new Friend("Noah", 26, "Noah@email.com", "654-987-1320")
]

for(let friend of friends) {
    friend.debug();
}