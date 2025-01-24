// Programa generador de dominio


let pronombre = ["the","our","your"];
let adj = ["master","great","super","only","wonderful","tasty","awesome","luxurious","brave"];
let sust = ["player","elephant","camel","pages","website","shrimp","carpage","airplane"];
let ext = [".com",".es",".gov",".org",".ve",".us",".net"];



let newDomain =[];


for (let i = 0; i<pronombre.length; i++){
    for (let j=0; j < adj.length; j++){
        for (let k = 0; k < sust.length; k++){
            for (let l = 0; l < ext.length; l++){
                console.log(pronombre[i]+adj[j]+sust[k]+ext[l]);


            }
        }
    }
}
