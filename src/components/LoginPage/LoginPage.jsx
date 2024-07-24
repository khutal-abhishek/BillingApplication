import React, { useState } from "react";
import { TextField, IconButton, InputAdornment, Checkbox, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./LoginPage.css";
import { assets } from "../../assets/asset";

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src={assets.logo} alt="LaundryBox Logo" />
          <h1><span className="hed1">GO</span><span className="hed2">MART</span></h1>
        </div>
        <form>
          <div className="input-group">
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="input-group">
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div className="remember-me">
            <Checkbox
              checked={rememberMe}
              onChange={handleRememberMeToggle}
              color="primary"
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <Button
            type="submit"
            variant="contained"
            className="login-button"
          >
            Login
          </Button>
        </form>
        <footer>
          Powered by <span className="brand-name">CombatTeam</span>
        </footer>
      </div>
    </div>
  );
};

// #57b849 green

export default LoginPage;
