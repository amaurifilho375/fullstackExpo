import React, {useState} from 'react';
import api from '../../services/api' ;

export default function Login ({history}){
    const [email, setEmail] = useState(''); //useState retorno vetor c 2 valores e estou usando desestruturação aqui "[]"

    async function handleSubmit(event) {
        event.preventDefault(); //para evitar o funcionamento padrão do form que tenta enviar p outra tela
       
       //console.log('helo amauri adora Jesus Cristo');
        // console.log(email);
       const response = await api.post('/sessions', {email}); //poderia ser assim: {email: email} mas coloquei so email pq cheve igual valor
       //console.log(response); //pra mim vê oque foi respondido pela api e mostro no console do browser  
       const {_id} = response.data ;
       //console.log(_id);
       localStorage.setItem('user', _id); //bd do navegador para armazenar informações
       history.push('/dashboard');
  
  
    }
    
     //outras formar de declarar a função acima 
    //function handleEmailChange(event){
     // setEmail(event.target.value)       
     //}
     
     return (
          
         <>
           <p>
             ofereça <strong> spots</strong> para programadores e encontre <strong> talentos </strong>  para sua empresas  
           </p>

            <form onSubmit={handleSubmit} >
                <label htmlFor="email"> E-MAIL *</label>
                <input 
                    id="email" 
                    type="email" 
                    placeholder="digite seu melhor e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <button className="btn" type="submit"> CADASTRAR</button> 

            </form>
         </>
    );


}