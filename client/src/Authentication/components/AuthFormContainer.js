import React , {useState} from 'react';
import dataUsers from '../../dataUsers.json'
import AuthFormView from './AuthFormView';
import AllCars from '../../view/AllCars';

const AuthFormContainer = () => {   

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [matchSuccess, setMatchSuccess] = useState(false);    
    const [loginFailed, setLoginFailed] = useState('');

    const handleChangeEmail =(e)=> {
        setEmail(e.target.value)            
    }

    const handleChangePassword =(e)=>{
        setPassword(e.target.value)

    }

    const handleClicLogin =()=> {

        const matchEmail = dataUsers.find(element=>element.email===email)
        console.log(matchEmail)
        const matchPassword = dataUsers.find(element=>element.password===password)
        if (matchEmail===undefined || matchPassword===undefined ) {
            setMatchSuccess(false)
            setLoginFailed('user name or password was incorrect')
        }
        else{
            setMatchSuccess(true)
            }
     }

     console.log(matchSuccess)
    if (matchSuccess) {
        return(
            <AllCars/>
        )
        
    }


    if (!matchSuccess) {
            return (
        <>
            <AuthFormView
            email={handleChangeEmail}
            password={handleChangePassword}
            clickLogin={handleClicLogin}
            />
            <h2>{loginFailed}</h2>            
        </>
    );
    }

}

export default AuthFormContainer ;
