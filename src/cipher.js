    
/*const cipher = function cipherEncode(texto,offset)
{return ((texto.charCodeAt()-65+offset) % 26) + 65}
*/

 const cipher = {encode: function(texto, offset){
     //let resultado = encode(texto, offset)
     
     let newText = ""
     let code= texto.charCodeAt()   
    //  newText = (texto.fromCharCode(resultado))
    // return ((code-65+offset)% 26)+65 
    return alert (newText+=String.fromCharCode(((code-65+offset)%26)+65))
    
    
}
 }
 



export default cipher;

/*function letraCorrespondente (resultado){
    return (resultado)
}


{

};

// ...

/*function cipher.encode(valor,frase)
let valor= document.querySelector('input [name="deslocamento"]:checked').value
let frase= document.querySelector('textarea [name="texto"]:checked').value
let ascii= frase.charCodeAt(frase)
*/

