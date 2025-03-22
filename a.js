"use strict";
function Afetr1Sec(fn) {
    setTimeout(fn, 1000);
}
Afetr1Sec(() => {
    console.log("hiii there");
});
