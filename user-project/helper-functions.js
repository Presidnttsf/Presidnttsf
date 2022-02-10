export const userCounter = function (allUsers, userAge) {
    let count = 0;

    for (let index = 0; index < allUsers.length; index++) {
        const user = allUsers[index];
        if (user.age > userAge) {
            count++;
        }
    }
    return count;
}

export const counterName = function (allUsers, userAge) {
    let userArr = [];

    for (let index = 0; index < allUsers.length; index++) {
        const user = allUsers[index];
        if (user.age > userAge) {
            userArr.push(user);
        }
    }
    return userArr;
}

export const usersByFirstNameLength = function (allUsers, namelength) {
    let userArr = [];

    for (let index = 0; index < allUsers.length; index++) {
        const user = allUsers[index];
        console.log("user", user);
        if (user.first_name.length <= namelength) {
            userArr.push(user);
        }
    }
    return userArr;
}

export const pd = function (user) {
    let fullname = user.first_name + ' ' + user.last_name;
    console.log('** Basic Info **');
    console.log("  Hello", fullname, '!!');
    console.log("  You live in", user.city);
    console.log("  Your ip address is", user.ip_address);
    if (user.age >= 18) {
        console.log(" ", fullname, 'can vote!');
    } else {
        console.log(" ", fullname, 'cannot vote!');
    }
    console.log('** Contact Info **');
    console.log('  Phone Number:', user.phone);
    console.log('  Email:', user.email);
    console.log('\n\n\n');
}

export const sayHello = function (p1) {
    console.log("Hello ", p1.first_name, p1.last_name)
}
