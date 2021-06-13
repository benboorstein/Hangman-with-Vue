/* pseudocode
- Have an array of the possible words that can be chosen by the computer...Just regular words; no proper nouns or slang
--- render in the UI an underscore for each letter in the word
- If user guesses a letter...
...that's in the word, write that letter in the correct position 
...that's not in the word, draw the head of the man, and then a body part for each incorrect guess
- Optional: present the incorrect guess letters, one by one, crossed out
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
            ]
        }
    },
    computed: { // 'computed' is the other data-storage mechanism in Vue
        wordLettersArr() {
            return this.words[Math.floor(Math.random() * this.words.length)].split('')
                // LEFT OFF HERE - need to render each letter of the wordLettersArr()...not sure how yet
        }
    },
    methods: {
        //
    },
    mounted() {
        //
    }
}

Vue.createApp(App).mount('#app')





// --------------------------------------

// /* pseudocode
// - Have an array of the possible words that can be chosen by the computer...Just regular words; no proper nouns or slang
// --- render in the UI an underscore for each letter in the word
// - If user guesses a letter...
// ...that's in the word, write that letter in the correct position 
// ...that's not in the word, draw the head of the man, and then a body part for each incorrect guess
// - Optional: present the incorrect guess letters, one by one, crossed out
// - If man is drawn fully, game over and user loses
// - If word is completed by correct guesses, game over and user wins
// */


// const App = {
//     data() {
//         return {
//             words: [
//                 'kayak',
//                 'mountain',
//                 'eat',
//                 'coniferous',
//                 'exciting',
//                 'basketball',
//                 'apple',
//                 'adventure',
//                 'field',
//                 'racecar',
//                 'ignominious',
//                 'ladder',
//                 'incredible' 
//             ]
//         }
//     },
//     computed: { // 'computed' is the other data-storage mechanism in Vue
//         lettersOfWord() {
//             let wordLettersArr = this.words[Math.floor(Math.random() * this.words.length)].split('')
//             wordLettersArr.forEach(letter => {
//                 console.log(letter)
//                 // LEFT OFF HERE - need to render each letter of the wordGenerated...not sure how yet
//             })
//         }
//     },
//     methods: {
//         //
//     },
//     mounted() {
//         //
//     }
// }

// Vue.createApp(App).mount('#app')