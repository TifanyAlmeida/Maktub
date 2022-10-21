import '../../assets/css/Css_components/Connects.css';
import logo from '../../assets/img/huawei_logo.jpeg';
export  const Connects = (props) => {

    return (
        <div className="testando">
            <nav>
                <img src={logo} alt="Logo marca da Huawei" width="130px" height="30px"/>
                <ul className='nav-ul'>
                    <li className='nav-li'><a href='#home'>Home</a></li>
                    <li className='nav-li'><a href='#landing'>Para você</a></li>
                    <li className='nav-li'><a href='#5G'>O que é 5G</a></li>
                    <li className='nav-li'><a href='#parceria'>Parceiros</a></li>
                </ul>
            </nav>
        </div>
    )
}