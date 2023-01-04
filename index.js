exports.isFPAvulnerable = isFPAvulnerable;

// This code is from pradosh-arduino/FPA-Checker in github
function isFPAvulnerable(a, b, decimal_leng) {
    a *= decimal_leng; b *= decimal_leng;
    // ^ Removing decimal so division is easy

    if (a % 2 == 0 && b % 2 == 0) { // Even number
        console.log("Not Vulnerable!")
        return false
    } else if (a % 2 != 0 && b % 2 != 0) { // Odd number
        console.log("Not Vulnerable!")
        return false
    } else if (b % a == 0) { // Multiples of it
        console.log("Not Vulnerable!")
        return false
    } else if (a % 2 == 0 && b % 2 != 0) { // a is even; b is odd
        console.log("Vulnerable!")
        return true
    } else if (a % 2 != 0 && b % 2 == 0) { // a is odd; b is even
        console.log("Vulnerable!")
        return true
    } else {
        console.log("Vulnerable!")
        return true
    }
}
