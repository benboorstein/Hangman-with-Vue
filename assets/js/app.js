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
                }           
            } else {
                this.lives -= 1
                /////////////////////// LEFT OFF HERE
                for (let i = 0; i < this.bodyParts.length; i++) {
                    this.bodyPartsShown.push(this.bodyParts[i])
                }
                ///////////////////////
                if (this.lives <= 0) {
                    this.playerWordInProg = 'You lose'
                }
            }
        }
    },
    // 'mounted' runs once, just after the component is created and placed on the page
    mounted() {
        this.playerWordInProg = this.wordLettersArr.map(letter => '_')
        console.log(this.wordLettersArr) // TEMP
    }
}

Vue.createApp(App).mount('#app')