import iconeGame from '../../assets/img/icone-controle-game.png';
import iconeEstrada from '../../assets/img/icone-estrada.png';
import iconeAgricultura from '../../assets/img/icone-agricultura.png';

import '../../assets/css/Css_components/G5.css';

export  const G5 = (props) => {

    return (
        <div className='div-externo' id="5G">
            <div className='div-centro'>
                <h2 className='what-5G'>O que é 5G?</h2>
                <p className='texto-apresentacao'>Em telecomunicações, o 5G é o padrão de tecnologia de quinta geração para redes móveis e de banda larga,<br/> que as empresas de telefonia celular começaram a implantar em todo o mundo no final do ano de 2018, e é o sucessor<br/> planejado das redes 4G que fornecem conectividade para a maioria dos dispositivos atuais.</p>
                
                <div className='inovacao-externo'>
                    <div className='inovacao-interno'> 
                        <div className='realidade-virtual'>
                            <p><b>Realidade Virtual</b></p>
                            <p>Proporciona uma experiência de jogo quando on-line com interação humana.</p>
                            <img src={iconeGame} alt='Icone de vídeo game' width="60px" className='img-icon'/>
                        </div>

                        <div className='cidade-inteligente'>
                            <p><b>Cidade Inteligente</b></p>
                            <p>Investimento na infraestrutura de cidades par suportar as tecnologias necessárias.</p>
                            <img src={iconeEstrada} alt="Icone de estrada inteligente" width="60px" className='img-icon'/>
                        </div>

                        <div className='agricultura'>
                            <p><b>Agricultura Inteligente</b></p>
                            <p>Monitora atividades no pasto e envia as informações necessárias para o celular.</p>
                            <img src={iconeAgricultura} alt="Imagem de agricultura" width="60px" className='img-icon'/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}