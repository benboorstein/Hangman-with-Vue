const App = {
    data() {
        return {
            bodyParts: [
                'head',
                'neck',
                'torso',
                'right arm',
                'left arm',
                'hands',
                'right leg',
                'left leg',
                'feet'
            ],
            bodyPartsShown: [],
            words: [
                'kayak',
                'mountain',
                'eat',
                'coniferous',
                'exciting',
                'basketball',
                'apple',
                'adventure',
                'field',
                'racecar',
                'ignominious',
                'ladder',
                'incredible' 
            ],
            alphabet: [
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
            ],
            lettersGuessed: [],
            playerWordInProg: [],
            gameOver: false
        }
    },
    // 'computed' is the other data-storage mechanism (besides 'data()') in Vue
    // 'computed' is based on 'data()' because 'data()' happens once, all at once, so if you need to reference something in 'data()', it has to be in 'computed'
    // 'computed' functions run any time 'data()' changes.
    // For 'computed': In the template, refer to function names as if they were keys (of key-value pairs)
    computed: {
        wordLettersArr() {
            return this.words[Math.floor(Math.random() * this.words.length)].split('') // e.g., ['m', 'o', 'u', 'n', 't', 'a', 'i', 'n']
        },
        livesRemaining() {
            return this.bodyParts.length - this.bodyPartsShown.length
        }
    },
    // 'methods' is for click events mainly...and to store other functions that will be explicitly called in the template
    methods: {
        checkIfLettInWord(lett) {
            this.lettersGuessed.push(lett)
            if (this.wordLettersArr.includes(lett.toLowerCase())) { // note that 'toLowerCase()' is needed so that what 'includes' is looking for matches what is inside the 'words' array (since 'wordLettersArr' is based on 'words')
                for (let i = 0; i < this.wordLettersArr.length; i++) {
                    if (this.wordLettersArr[i] === lett.toLowerCase()) {
                        this.playerWordInProg[i] = lett 
                    }
                }
                if (!this.playerWordInProg.includes('_')) {
                    this.playerWordInProg = 'You win'
                    this.gameOver = true
                }
            } else {
                this.bodyPartsShown.push(this.bodyParts[this.bodyPartsShown.length]) // clever!
                if (this.livesRemaining <= 0) {
                    this.playerWordInProg = 'You lose'
                    this.gameOver = true
                }
            }
        }
    },
    // 'mounted' runs once, just after the component is created and placed on the page
    mounted() {
        this.playerWordInProg = this.wordLettersArr.map(letter => '_')
    }
}

Vue.createApp(App).mount('#app')