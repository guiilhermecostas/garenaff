import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoAppLight from '../logo/logolight.png'

const LoginForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Codifique os dados na URL como parâmetros
    navigate(`/intro?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="telatotallogin">
      <img src={LogoAppLight} className="logoapp" />
      <form onSubmit={handleSubmit} className="formulariodelogin">
        <input
          type="text"
          placeholder="@nomedeusuario"
          className="inputforms"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Melhor E-mail"
          className="inputforms"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className="inputforms"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="checkboxlembrar">
          <input type="checkbox" name="lembrarcheckox" id="checkboxlembre" value="Lembrarme" />
          <label htmlFor="checkboxlembre" className="checkboxlembre">Lembrar-me</label>
        </div>
        <button type="submit" className="botaocadastrar">Cadastrar-se</button>
        <p className="informacaotext">
          Ao clicar <b>"Cadastrar-se"</b>, você concorda com os nossos <u>Termos</u> e <u>Política de Privacidade.</u>
        </p>
      </form>
      <footer className="footersite">
        <p>© 2025 LovePix. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default LoginForm;
