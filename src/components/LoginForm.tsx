import { useNavigate } from 'react-router-dom';
import '@fontsource/metropolis/100.css';
import '@fontsource/metropolis/200.css';
import '@fontsource/metropolis/300.css';
import '@fontsource/metropolis/400.css';
import '@fontsource/metropolis/500.css';
import '@fontsource/metropolis/600.css';
import '@fontsource/metropolis/700.css';
import '@fontsource/metropolis/800.css';
import '@fontsource/metropolis/900.css';
import LogoAppFF from './logo/kamylinha.jpg';
import LogoPrivacy from './logo/privacy.svg';
import PrivacyWhite from './logo/whitecolor.png'
import VideosCamius from './logo/4c.mp4'
import VideosCamiuss from './logo/3v.mp4'

const IntroApp = () => {

  const navigate = useNavigate(); // Inicializa o hook para navegação

  // Função que será chamada ao clicar no botão
  const handleRedirect = () => {
    // Navega para a nova página, por exemplo "/nova-rota"
    navigate('/7d');
  };
  // Função que será chamada ao clicar no botão
  const handleRedirect30 = () => {
    // Navega para a nova página, por exemplo "/nova-rota"
    navigate('/30d');
  };
  // Função que será chamada ao clicar no botão
  const handleRedirectVita = () => {
    // Navega para a nova página, por exemplo "/nova-rota"
    navigate('/vita');
  };

  return (
    <div className="telatotalogin">
      <div className="barrasuperior">
        <div className='garenffbarra'>
          <img src={LogoPrivacy} className="logoprovacyyss" />
        </div>
      </div>


      <div className='bannerprincipal'>
        <div className='backgroudgradiente'>
          <div className="textdecoreacio">
            <p className='decoratxt'>744 posts</p>
            <div className="bloinhadeco"></div>
            <p className='decoratxt'>670k likes</p>
          </div>
        </div>
      </div>

      <div className="selecao">
        <div className="gridcentra">
          <div className='primeiradivcenter'>
            <div className="logoetexto">
              <div className="cenralizaapptext">
                <img src={LogoAppFF} className='logoferrs' />
                <div className='aovivodiv'>
                  <p className='aovivo'>Ao Vivo</p>
                </div>
              </div>
            </div>
          </div>
          <div className='inforuseresname'>
            <div className='infoperfil'>
              <p className='txtname'>Kamylinha</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" className="bi bi-check-all" viewBox="0 0 16 16">
                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"></path>
              </svg>
            </div>
            <p className='usernameuser'>@KamylinhaOficial</p>
          </div>
        </div>
      </div>


      <p className="descricaoprivacy">
        Oi meu bem! Sou a Kamylinha💋, você já deve me conhecer das redes sociais, agora é a hora de conhecer o meu lado mais safadinha rsrs! Aqui no meu perfil você vai ter acesso à cenas picantes feitas por mim sozinha e acompanhada, espero que se divirta e goze bem gostoso pra mim😈!
      </p>

      <div className="assineagoramesmo">
        <p className="textoprincipaltxtass">ASSINE AGORA</p>
        <div className="selecaodeplano">
          <button className="textobotao" onClick={handleRedirect}>
            <p id="tipoplano">Assinar (7 dias)</p>
            <p id="valorplano">R$ 9,90</p>
          </button>

          <button className="textobotao" onClick={handleRedirect30}>
            <p id="tipoplano">Assinar (30 dias)</p>
            <p id="valorplano">R$ 29,90</p>
          </button>

          <button className="textobotao" onClick={handleRedirectVita}>
            <p id="tipoplano">Assinar (Vitalício)</p>
            <p id="valorplano">R$ 39,90</p>
          </button>
        </div>
      </div>

      <div className="textdecoreacios">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <p className='decoratxts'>744 posts</p>
        <div className="bloinhadecos"></div>
        <p className='decoratxts'>370 fotos</p>
        <div className="bloinhadecos"></div>
        <p className='decoratxts'>374 vídeos</p>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="privacybanner">
        <div className="imagemprimdeirao">
          <video className="video-background" src={VideosCamius} autoPlay muted loop playsInline />
          <div className='logopircacy'>
            <img src={PrivacyWhite} />
          </div>
        </div>

        <div className="imagemprimdeirao">
          <video className="video-background" src={VideosCamiuss} autoPlay muted loop playsInline />
          <div className='logopircacy'>
            <img src={PrivacyWhite} />
          </div>
        </div>
      </div>

      <footer className="footersitess">
        <div className="inforeoci">
          <div className="fortspag">
            <p className="txtdiamondbonus">370 fotos + 374 vídeos</p>
          </div>
          <div className="totalpricepag">
            <p className="indfotxttotalmaisrais">Total: <b className='precoatual'>R$ 9,90</b></p>
          </div>
        </div>
        <div className="botaopagmento">
          <button className='botatocompraagora' onClick={handleRedirect}>
            <svg width="1em" height="1em" viewBox="0 0 80 80" className='svgescudfobotacompag' fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54.125 34.1211C55.2966 32.9495 55.2966 31.05 54.125 29.8784C52.9534 28.7069 51.0539 28.7069 49.8823 29.8784L38.0037 41.7571L32.125 35.8784C30.9534 34.7069 29.0539 34.7069 27.8823 35.8784C26.7108 37.05 26.7108 38.9495 27.8823 40.1211L35.8823 48.1211C37.0539 49.2926 38.9534 49.2926 40.125 48.1211L54.125 34.1211Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.4187 3.4715C41.2965 2.28554 38.711 2.28554 36.5889 3.4715L8.07673 19.4055C6.19794 20.4555 4.97252 22.4636 5.02506 24.7075C5.36979 39.43 10.1986 63.724 37.0183 76.9041C38.8951 77.8264 41.1125 77.8264 42.9893 76.9041C69.809 63.724 74.6377 39.43 74.9825 24.7075C75.035 22.4636 73.8096 20.4555 71.9308 19.4055L43.4187 3.4715ZM39.5159 8.7091C39.8191 8.53968 40.1885 8.53968 40.4916 8.7091L68.9826 24.6313C68.6493 38.3453 64.2154 59.7875 40.343 71.5192C40.135 71.6214 39.8725 71.6214 39.6646 71.5192C15.7921 59.7875 11.3583 38.3453 11.025 24.6313L39.5159 8.7091Z" fill="currentColor"></path></svg>
            Assinar (7 dias)
          </button>
        </div>
      </footer>
    </div>
  );
};

export default IntroApp;
