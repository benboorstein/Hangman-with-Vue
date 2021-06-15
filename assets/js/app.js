/* pseudocode
- If man is drawn fully, game over and user loses
- If word is completed by correct guesses, game over and user wins
*/


const App = {
    data() {
        return {
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
            lives: 7, // the 7 is derived from me choosing to have 7 body parts in the template
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
                for (let i = 0; i < this.wordLettersArr.length; i++) { // ["b", "a", "s", "k", "e", "t", "b", "a", "l", "l"]
                    if (this.wordLettersArr[i] == lett.toLowerCase()) {
                        this.playerWordInProg[i] = lett // LEFT OFF HERE - fix this

                        // this.playerWordInProg.replaceAll(this.playerWordInProg[i], lett)
                        
                        // items2 = items.Select(x => x.Replace("one", "zero")).ToArray();

                        // this.playerWordInProg.splice(i, /*number of times lett occurs*/, lett) // at index i, replaces 1 element with 'lett'
                    }
                }                
            } else {
                this.lives -= 1
                // don't mess with yet: add body part to man (and, optionally, present the incorrect letter, below the correct ones and crossed out)
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