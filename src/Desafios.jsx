
function Desafios() {
    const desafios = {
        desafio1: {
            objetivo: "collage",
            dia: "miercoles"
        },
          desafio2: {
            objetivo: "poster",
            dia: "jueves"
    }
  }
  return (
    <>
    <div>{desafios.desafio1.objetivo}</div>
    <div>{desafios.desafio2.objetivo}</div>
    </>
    
  )
}



export default Desafios