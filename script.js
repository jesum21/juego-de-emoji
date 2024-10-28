const emojis = ["😍","😍","❤️","❤️","🤪","🤪","😎","😎","😆","😆","😡","😡","😘","😘","🤗","🤗"];
var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
let openCards = [];

for(var i = 0; i < emojis.length; i++){
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = '<div class="item-inner">' + shuf_emojis[i] + '</div>';
    box.onclick = function(){
        if(!this.classList.contains('boxOpen') && openCards.length < 2) {
            this.classList.add('boxOpen');
            openCards.push(this);

            if(openCards.length == 2){
                setTimeout(function(){
                    if(openCards[0].querySelector('.item-inner').innerHTML ==
                       openCards[1].querySelector('.item-inner').innerHTML){
                        openCards[0].classList.add('boxMatch');
                        openCards[1].classList.add('boxMatch');
                        openCards = [];

                        if(document.querySelectorAll('.boxMatch').length == emojis.length){
                            alert('¡Ganaste!');
                        }
                    } else {
                        openCards[0].classList.remove('boxOpen');
                        openCards[1].classList.remove('boxOpen');
                        openCards = [];
                    }
                }, 500);
            }
        }
    }
    document.querySelector('.game').appendChild(box);
}