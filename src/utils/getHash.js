// location.hash en este estado solo va a parecer asi la direccion el valor del ID #/1
// SE QUIERE ELIMINAR EL MICHI CON EL SLICE(1)
// toLocaleLowerCase es una funcion
// .split('/') que elimine los slashh ya que tiene por defecto
// ['','1', ''] este es la logica que va  atener 
const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
    
    export default getHash;