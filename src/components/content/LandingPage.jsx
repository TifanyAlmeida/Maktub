import '../../assets/css/Css_components/LandingPage.css';
import popWifi from '../../assets/img/case.png';

export  const LandingPage = (props) => {

    return (
        <div className='fundo-landing-page' id="landing">
            <div className='fundo-5g-texto'>
                <div id='texto-5g'>
                    <h1 className='titulo-5g'>Juntos e Conectados</h1>
                    <p>Não perca nada. Saiba tudo o que acontece<br/>no mundo e compartilhe os melhores momentos<br/> com os amigos e família.</p><p>Com o POPWIFI tudo é possível!</p>
                    
                    <div className="container">
                        <div className="interior">
                        <a href="#open-modal" id="saibamais" className='link-pop'><button className='button-saiba-mais'>Saiba Mais</button></a>
                        </div>
                    </div>
                    <div id="open-modal" className="modal-window">
                        <div>
                            <div className='Xzin'>
                                <h1>POPWIFI</h1>
                                <a href="#landing" title="Close" className="modal-close" id="xfecha"><b>X</b></a>
                            </div>
                            
                            <br></br>
                            <div>
                                Pensando em portabilidade e conectividade integrado ao 5G, pensamos em POPWIFI, um produto que tem uma fácil utilização, precisando ter apenas um chip com pacote de dados.
                                Ao ligar o aparelho ele irá disponibilizar uma rede wi-fi que pode ser configurada através de um aplicativo no celular, nele poderá alterar a senha da rede e colocar número 
                                máximo de usuários que pode se conectar ao mesmo tempo na rede.
                                Após configurado é apenas ligar e utilizar,quando for necessário compartilhar internet com as pessoas que estiver ao seu redor, não ligue o acorador do smartphone e sim POPWIFI,
                                mais prático e com disponibilidade de rede 5G.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='div-imagem'>
                <div className='triangulo'>
                    <img src={popWifi} className='fundo-5g' alt="Imagem de fundo 5G"/>
                </div>
            </div>
        </div>
    )
}