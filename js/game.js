const emojis = [`🐶`,`🐭`,`🦊`,`🐻`,`🦁`,`🐸`,`🐷`,`🐥`,`🐶`,`🐭`,`🦊`,`🐻`,`🦁`,`🐸`,`🐷`,`🐥`];

let change_emojis = emojis.sort(ChangeEmojies);
function ChangeEmojies(){
    if(Math.random() > 0.5){
        return  2 ;
    }else{
        return -1 ;
    }  
}