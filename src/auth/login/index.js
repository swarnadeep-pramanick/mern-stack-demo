import React, { useState,useContext } from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Controller, useForm } from 'react-hook-form'
import { Card, CardContent } from '@mui/material';

import '../auth.css'
import { authContext } from '../../shared/context/auth.context';

const Login = () => {
    const auth = useContext(authContext)
    const [isLogin,setIsLogin] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const defaultValues = {
        name:'',
        email:'',
        password:''
      }
    const changeState = () => {
        (!showPassword) ? setShowPassword(true) : setShowPassword(false)
    }
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues,
        mode: 'onChange',
        // resolver: yupResolver(schema)
    })

  const SubmitForm = (data) => {
    console.log(data)
    auth.login()
  }
  const handleSwitch = (e) => {
    e.preventDefault()
    setIsLogin(prevMode => !prevMode)
  }
  return (
    <Card variant="outlined" className='auth-card'>
        <CardContent>
            <h3>{isLogin ? 'Login' : "Register"}</h3>
        </CardContent>
        <CardContent>
        <form className='login-form' onSubmit={handleSubmit(SubmitForm)}>
        {!isLogin && (
            <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
                name='name'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                    autoFocus
                    label='Name'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.email)}
                    //placeholder='admin@materialize.com'
                />
                )}
            />
            {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
        </FormControl>
        )}
        <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                    autoFocus
                    label='Email'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.email)}
                    //placeholder='admin@materialize.com'
                />
                )}
            />
            {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth>
        <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
            Password
        </InputLabel>
        <Controller
            name='password'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
            <OutlinedInput
                value={value}
                onBlur={onBlur}
                label='Password'
                onChange={onChange}
                id='auth-login-v2-password'
                autoComplete='off'
                error={Boolean(errors.password)}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                <InputAdornment position='end'>
                    <IconButton
                    edge='end'
                    onMouseDown={e => e.preventDefault()}
                    onClick={changeState}
                    >
                    {showPassword ? <RemoveRedEyeOutlinedIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                </InputAdornment>
                }
            />
            )}
        />
        {errors.password && (
            <FormHelperText sx={{ color: 'error.main' }} id=''>
            {errors.password.message}
            </FormHelperText>
        )}
    </FormControl>
    <FormControl>
    <Button type='submit' variant="outlined" sx={
        {
            marginTop:'20px'
        }
    }>{isLogin ? 'Login' : "Register"}</Button>
    </FormControl>
    </form>
    <FormControl>
        <h4>Need an Account? <a className='linkTo' href='/test' onClick={handleSwitch}>Click Here</a></h4>
        
    </FormControl>
    </CardContent>
    </Card>
  )
}

export default Login