"use strict";
// import { use } from "react";
function CheckAge(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(CheckAge({ firstName: "rishu", lastName: "rai", age: 12 }));
