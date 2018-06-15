new Vue({
    el: '#vue-app',
    data: {
        playerNum: '',
        computerNum: '',
        //winner: 'WON',
        //loser: 'Lost',
        //surprise:'https://media.giphy.com/media/x4O0fjpQfoBZS/giphy.gif',
        resetVal: '',
        start: true,
        replay: false,
    },

    methods: {
        randomNum: function () {

            if (this.playerNum > 0 && this.playerNum < 11) {
                this.computerNum = Math.floor(Math.random() * (11 - 1)) + 1;
                return [this.computerNum, this.playButton()];
            }

            else {
                return this.resetVal;
            }

        },
        playButton: function () {
            if (this.start === true || this.replay === false) {
                return [this.start = false, this.replay = true]
            }
        },

        resetButton: function () {

            if (this.computerNum !== this.playerNum && this.start === false && this.replay === true)

                return [this.computerNum = '', this.playerNum = '', this.start = true, this.replay = false];
        }
    },

    computed: {
        determin: function () {
            if (this.playerNum === '0' || this.playerNum < 0) {
                return 'https://media.giphy.com/media/3og0IJXQEKwIdIEYpy/giphy.gif';//try again
            }
            else if (this.computerNum === '' || this.playerNum === '') {
                return 'https://media.giphy.com/media/zaezT79s3Ng7C/giphy.gif'; //start
            }
            else if (this.computerNum == this.playerNum) {
                return 'https://media.giphy.com/media/x4O0fjpQfoBZS/giphy.gif'; //balloon
            }
            else if (this.computerNum !== this.playerNum) {
                return 'https://media.giphy.com/media/d2W7eZX5z62ziqdi/giphy.gif'; //fail
            }


        },

    },

});