const emojis = [`🐶`,`🐭`,`🦊`,`🐻`,`🦁`,`🐸`,`🐷`,`🐥`,`🐶`,`🐭`,`🦊`,`🐻`,`🦁`,`🐸`,`🐷`,`🐥`];

let change_emojis = emojis.sort(ChangeEmojies);
function ChangeEmojies(){
    if(Math.random() > 0.5){
        return  2 ;
    }else{
        return -1 ;
    }  
}
for (let i = 0; i < emojis.length; i++){
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = change_emojis[i];

    box.onclick = function() {
        this.classList.add('boxOpen');

        setTimeout(function() {
    })
} }