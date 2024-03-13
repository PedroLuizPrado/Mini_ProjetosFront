import { useEffect, useState } from "react"

const Exemplo01 = () => {

    const[janela,setJanela] = useState({
        largura : window.innerWidth ,
        altura : window.innerHeight
    })

    useEffect((  ) => {
        const handleResize = ()=> {
            setJanela({
            largura : window.innerWidth ,
            altura : window.innerHeight
        })
        }
        // Adiciona evento de redimentionamento da janela do escopo do componente
        window.addEventListener('resize', handleResize);
        return() => {
            window.removeEventListener('resize', handleResize);
        }
    },[]); //Sem esse segundo parametro, a função será executada toda vez que esse valor das dependências mudar
            //com ele vazio, ele executa apenas uma vez a montagem do componente

return(
    <>
    <h1>Exemplo</h1>
    <p><b>Largura:</b>{janela.largura}px</p>
    <p><b>Altura: </b>{janela.altura}px</p>

    </>


)




}

export default Exemplo01;