import { useState } from 'react';
import classes from './login.module.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [info, setInfo] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleClick = (e)=>{

        e.preventDefault();
        const data = {
            username: username,
            password: password
        }
        
        fetch('http://localhost:3000/api/login', {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(data)

        })
        .then(resp => {return resp.json()})
        .then(json => {
            console.log(json);
            setInfo(json);
            navigate('/contact')
            
        })
        .catch(err => console.error("could not fetch bcz", err))

        
        
    }
    return ( 
        <form action="">
            <input type="email" 
            name="username"
            id="username"
            placeholder="Email"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            /><br/>

            <input type="password"
             name="password"
             id="password" 
             placeholder="Password"
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
             /><br />
            <button type="submit" onClick={handleClick}>LogIn</button>
        </form>
     );
}
 
export default Login;