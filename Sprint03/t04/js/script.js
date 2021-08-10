let houseMixin = {
    wordReplace(word_1, word_2) {
        this.description = this.description.replace(word_1, word_2)
        return this.description
    },

    wordInsertAfter(word_1, word_2) {
        this.description = this.description.replace(word_1, word_1 + " " + word_2)
        return this.description
    },

    wordDelete(word_1) {
        this.description = this.description.replace(word_1, "")
        return this.description
    },

    wordEncrypt() {
        this.description = this.description.replace(/[A-Z]/gi, c =>
            "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"[
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(c) ] )
    },

    wordDecrypt() {
        this.description = this.description.replace(/[A-Z]/gi, c =>
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
            "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".indexOf(c) ] )
    }
}