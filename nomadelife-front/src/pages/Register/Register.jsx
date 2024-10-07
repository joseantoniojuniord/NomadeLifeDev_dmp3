import styles from "./Register.module.css"
import { useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'


const Register = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { createUser, error, loading } = useAuthentication();


    const handlerSubmit = async(e) =>{
        e.preventDefault()
        
        if(password !== confirmPassword){
            alert('As senhas não se coicedem!')
            return;
        }

        const data = {
            nome,
            email,
            password
        };

        const user = await createUser(data)

        if(user){
            alert('Usuário criado com sucesso')
        }

        
    }

return (
    <div className={styles.register}>
      <h1>Compartilhe suas experiências com outros nomades</h1>
      <form onSubmit={handlerSubmit}>
        <label>
            <span>Nome:</span>
            <input
            type='text'
            name='Nome'
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Entre com seu nomade nome"
            ></input>
        </label>
        <label>
            <span>E-mail:</span>
            <input
            type='email'
            name='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entre com E-mail"
            ></input>
        </label>
        <label>
            <span>Senha:</span>
            <input
            type='password'
            name='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entre com sua senha"
            ></input>
        </label>
        <label>
            <span>Confirmação:</span>
            <input
            type='password'
            name='password'
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Entre com sua senha"
            ></input>
        </label>
        {!loading && <button type='submit'>Cadastrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  );
}

export default Register