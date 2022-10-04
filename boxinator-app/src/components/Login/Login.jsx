import './login.css';
const Login = () => {
    return(
        <div className="container login">
            <h1>Login page </h1>

          <form>

            <img  className="imageLogo" src="#" alt="Logo"></img><br></br>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>

            <button type="submit" className="btn login btn-primary">Login</button>
            <div>
            <button type="submit" className="btn guest btn-primary">Guest</button> <button type="submit" className="btn register btn-primary">Register</button>
            </div>
    
        </form>
        </div>
    )
}





export default Login;