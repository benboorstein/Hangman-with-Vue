/* pseudocode
- If man is drawn fully, game over and user loses
- If word is completed by correct guesses, game over and user wins
*/


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
            bodyPartsShown: ['Please play! You have 9 guesses'],
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
            lives: 9, // the 9 is derived from me choosing to have 9 body parts in the template
            playerWordInProg: []
        }
    },
    // 'computed' is the other data-storage mechanism (besides 'data()') in Vue
    // 'computed' is based on 'data()' because 'data()' happens once, all at once, so if you need to reference something in 'data()', it has to be in 'computed'
    // 'computed' functions run any time 'data()' changes.
    // For 'computed': In the template, refer to function names as if they were keys (of key-value pairs)
    computed: {
        wordLettersArr() { 
            return this.words[Math.floor(Math.random() * this.words.length)].split('')
        }
    },
    // 'methods' is for click events mainly...and to store other functions that will be explicitly called in the template
    methods: {
        checkIfLettInWord(lett) {
            if (this.wordLettersArr.includes(lett.toLowerCase())) { // note that 'toLowerCase()' is needed so that what 'includes' is looking for matches what is inside the 'words' array (since 'wordLettersArr' is based on 'words')
                for (let i = 0; i < this.wordLettersArr.length; i++) {
                    if (this.wordLettersArr[i] == lett.toLowerCase()) {
                        this.playerWordInProg[i] = lett 
                    }
                }
                if (!this.playerWordInProg.includes('_') && this.lives > 0) {
                    this.playerWordInProg = 'You win'
                    lett.disabled
                }
            } else {
                this.lives -= 1

                if (this.lives == 8) {
                    this.bodyPartsShown = []
                    this.bodyPartsShown.push(this.bodyParts[0])
                } else if (this.lives == 7) {
                    this.bodyPartsShown.push(this.bodyParts[1])
                } else if (this.lives == 6) {
                    this.bodyPartsShown.push(this.bodyParts[2])
                } else if (this.lives == 5) {
                    this.bodyPartsShown.push(this.bodyParts[3])
                } else if (this.lives == 4) {
                    this.bodyPartsShown.push(this.bodyParts[4])
                } else if (this.lives == 3) {
                    this.bodyPartsShown.push(this.bodyParts[5])
                } else if (this.lives == 2) {
                    this.bodyPartsShown.push(this.bodyParts[6])
                } else if (this.lives == 1) {
                    this.bodyPartsShown.push(this.bodyParts[7])
                } else if (this.lives == 0) {
                    this.bodyPartsShown.push(this.bodyParts[8])
                } else {
                    lett.disabled
                }
                if (this.lives <= 0) {
                    this.playerWordInProg = 'You lose'
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