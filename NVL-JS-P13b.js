function palindromosFinder(string){
    var str1 = string
    var str2 = string
    str1=str1.replace(/\s/g, '').toLowerCase();
    str2= str2.replace(/\s/g, '').split('').reverse().join('').toLowerCase();
    if(str1 === str2){
        console.log('"' +string +'"'+ " es un palindromo") 
    }
    
}   
palindromosFinder("Yo voy")
palindromosFinder("Somos o no somos")