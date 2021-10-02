import React, { useState } from 'react'
import { auth } from '../../server/firebase'
import { useStateValue } from '../../context/stateprovider/StateProvider'

function Login() {
    const [{ user }, dispatch] = useStateValue()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = (e) => {


        auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                if (user) {
                    dispatch({
                        type: "REGISTER_USER",
                        user: user.email
                    })
                }
            })
            .catch(err => console.log(err))
        e.preventDefault()
        console.log(email, password)
    }


    const signInUser = (e) => {
        auth.signInWithEmailAndPassword(email, password)
        .then(user => {
            if(user){
                dispatch({
                    type: "SIGN_IN_USER",
                    user: user.email
                })
            }
        })
        .catch(err => console.log(err))
        e.preventDefault(user)
    }


    return (
        <div className="login">
            <form>
                <input type="email" placeholder="Username or email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" id="#" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={registerUser}>Create user</button>
                <button onClick={signInUser}>Sign In</button>

            </form>
        </div>
    )
}

export default Login
