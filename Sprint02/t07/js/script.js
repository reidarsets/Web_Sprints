function sortEvenOdd (array) {
    array.sort(function(a, b) {
        if(a % 2 == 0 && b % 2 == 1) {
            return -1
        }
        if(a % 2 == 1 && b % 2 == 0) {
            return 1
        }
        if(a % 2 == 1 && b % 2 == 1) {
            if (a > b) {
                return 1
            }
            else {
                return -1
            }
        }
        if(a % 2 == 0 && b % 2 == 0) {
            if (a > b) {
                return 1
            }
            else {
                return -1
            }
        }
    })
}
