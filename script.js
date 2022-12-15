var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function hot_edge() {
    for(var i=0;i<30;i++){
        var randomNum = Math.floor(Math.random() * 10);
        var randomWord = '';
        for ( var j = 0; j < randomNum; j++ ) {
            randomWord += characters.charAt(Math.floor(Math.random() * 62));
        }
        window.open("https://www.bing.com/search?q=" + randomWord);
    } 
}