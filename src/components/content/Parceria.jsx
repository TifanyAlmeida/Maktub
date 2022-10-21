import '../../assets/css/Css_components/Parceria.css';
import fotoTim from '../../assets/img/tim.jpg';
import fotoClaro from '../../assets/img/Claro.jpg';
import fotoVivo from '../../assets/img/vivo.jpg';

export function Parceria(props) {

    return (
        <>
            <div className='div-centralizadora'>
                <div className='esquerda'>
                    <div className='texto-esquerda'>
                        <p className='parceria-titulo' id="parceria">Parcerias</p>
                        <h2 className='paceria-titulo'>A parceria do 5G aplicada pela<br/> Huawei e outras gigantes.</h2>
                        <p>Essa colaboração permite a todos uma fazer a sua parte para melhorar a vida das pessoas. Juntos somos mais sábios e temos uma visão melhor de futuro. Assim, estaremos preparados para qualquer coisa.</p>
                    </div>
                    <div className='imagem-esquerda'>
                        <img src={fotoTim} alt='Imagem operadora Tim' width="600px" className='foto-tim'/>
                    </div>
                </div>

                <div className='direita'>
                    <div className='imagem1-direita'>
                        <img src={fotoVivo} alt='Imagem operadora Vivo' width="800px" height="500px" className='foto-vivo'/>
                    </div>
                    <div className='imagem2-direita'>
                        <img src={fotoClaro} alt='Imagem operadora Claro' width="550px" className='foto-claro'/>
                    </div>
                </div>
            </div>
        </>
    );
}