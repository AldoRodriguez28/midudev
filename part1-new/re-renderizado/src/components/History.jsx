const History =({allClicks})=>{
    if(allClicks.length == 0){
        return(
            <p>upss aun no haz dado click al boton</p>
        )
    }else{
        return(
            <p>Historial de botones clickeados {allClicks.join(' ')}</p>
        )
    }
}
export default History;