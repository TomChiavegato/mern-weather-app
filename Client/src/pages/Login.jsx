import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { login, reset } from '../features/auth/authSclice'


function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password:'',
    })

    const {email, password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((oldData) => ({
            ...oldData,
            [e.target.name]: e.target.value,
        }))
    }
    

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password,
        }

        dispatch(login(userData))
    }

    if(isLoading){
        return (
            <div className="message-container">
          <h1 className="message">Loading...</h1>
        </div>
        )
    }

  return (
    <>
    <section className='heading'>
    <div className='message-container'>
        <h1 className='message'>
            Login
        </h1>
        </div>
    </section>

    <section className='form'>
        <form onSubmit={onSubmit}>
            
            <div className='form-group'>
            <input type='text' 
            className='form-control' 
            id='email'
            name='email' 
            value={email} 
            placeholder='Email'
            onChange={onChange} />
            </div>
            
            <div className='form-group'>
            <input 
            type='password' 
            className='form-control' 
            id='password'
            name='password' 
            value={password} 
            placeholder='Password'
            onChange={onChange} />
            </div>
            
            <div className='form-group'>
                <button type='submit' className='formButton'>
                    Sign In
                </button>
            </div>
            <div className='form-group'>
            <Link to='/register' className='link'>
                <button className='formButton'>
                    Create an Account
                </button>
                </Link>
            </div>
        </form>
    </section>
    </>
  )
}

export default Login