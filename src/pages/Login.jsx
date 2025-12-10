import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">

        <h1 className="login-title">Login</h1>

        <input 
          type="text"
          placeholder="Usuário"
          className="login-input"
        />

        <input 
          type="password"
          placeholder="Senha"
          className="login-input"
        />

        <button className="login-button">Entrar</button>

        <p className="login-footer">
          Esqueceu a senha?
        </p>
      </div>
    </div>
  );
}

export default Login