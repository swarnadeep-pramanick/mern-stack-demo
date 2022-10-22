import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Backdrop from '@mui/material/Backdrop';
import {  toast } from 'react-toast'
// import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { Controller, useForm } from "react-hook-form";
import { Card, CardContent } from "@mui/material";

import "../auth.css";
import { authContext } from "../../shared/context/auth.context";
import { user_login, user_register } from "../../urls/urls";

const Login = () => {
  const auth = useContext(authContext);
  const [loading,setLoading] = useState(false)
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };
  const changeState = () => {
    !showPassword ? setShowPassword(true) : setShowPassword(false);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    // resolver: yupResolver(schema)
  });

  const SubmitForm = async (data) => {
    // console.log(data)
    setLoading(true)
    if (isLogin) {
      try {
        const respose = await fetch(user_login, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        });
        // console.log()
        if (respose.status === 200) {
          const responseData = await respose.json();
          const user = responseData.user;
          auth.user = user;
          auth.login();
          setLoading(false)
          console.log(auth.user);
        }
      } catch (err) {
        setLoading(false)
        console.log(err);
        
      }
    } else {
      try {
        const response = await fetch(user_register, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
            image:
              "https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/311327642_5721062127950205_6812924801400730228_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cqvtmwh2Y-gAX9A2M_c&_nc_ht=scontent.fccu3-1.fna&oh=00_AT-bMseaZWaulAS1NJcQqBND8uphrA032wzw2e6XWjcQdQ&oe=6356A4BE",
          }),
        });
       if(parseInt(response.status.toString()) === 201){
        console.log(1)
        // const responseData = await response.json();
        setLoading(false)
        toast.success("Registration successfull")
        handleSwitch()
       }
       else{
        setLoading(false)
        const responseData = await response.json();
        toast.error(responseData.message)
       }
      } catch (err) {
        setLoading(false)
        toast.error(err);
      }
    }
  };
  const handleSwitch = () => {
    setIsLogin((prevMode) => !prevMode);
  };
  return (
    <Card variant="outlined" className="auth-card">
      <CardContent>
        <h3>{isLogin ? "Login" : "Register"}</h3>
      </CardContent>
      <CardContent>
        <form className="login-form" onSubmit={handleSubmit(SubmitForm)}>
          {!isLogin && (
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    autoFocus
                    label="Name"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.email)}
                    //placeholder='admin@materialize.com'
                  />
                )}
              />
              {errors.email && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.email.message}
                </FormHelperText>
              )}
            </FormControl>
          )}
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  autoFocus
                  label="Email"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.email)}
                  //placeholder='admin@materialize.com'
                />
              )}
            />
            {errors.email && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.email.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth>
            <InputLabel
              htmlFor="auth-login-v2-password"
              error={Boolean(errors.password)}
            >
              Password
            </InputLabel>
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <OutlinedInput
                  value={value}
                  onBlur={onBlur}
                  label="Password"
                  onChange={onChange}
                  id="auth-login-v2-password"
                  autoComplete="off"
                  error={Boolean(errors.password)}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={changeState}
                      >
                        {showPassword ? (
                          <RemoveRedEyeOutlinedIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
            {errors.password && (
              <FormHelperText sx={{ color: "error.main" }} id="">
                {errors.password.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <Button
              type="submit"
              variant="outlined"
              sx={{
                marginTop: "20px",
              }}
            >
              {isLogin ? "Login" : "Register"}
            </Button>
          </FormControl>
        </form>
        <FormControl>
          <h4>
            Need an Account?{" "}
            <Button type="button" className="linkTo" onClick={handleSwitch}>
              Click Here
            </Button>
          </h4>
        </FormControl>
      </CardContent>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        // onClick={handleClose}
></Backdrop>
    </Card>
  );
};

export default Login;
