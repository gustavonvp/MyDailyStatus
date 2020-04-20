import auth0 from '../../lib/auth0';

// request <> response

const login = async (request,response) =>{
   await auth0.handleLogin(request,response);
}

//autenticação: multi factor auth
//autorização

export default login;