import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import CommonButton from "../../../component/common/Button";

class LoginAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        userName: "",
        password: "",
      },
    };
  }

  handleSubmit = async () => {
    console.log("Hi handle");
    console.log(this.state.formData);
  };

  handleChange = (event) => {
    let id = event.target.name;
    switch (id) {
      case "userName":
        const userName = event.target.value;
        this.setState(
          Object.assign(this.state.formData, { userName: userName })
        );
        // this.setState({ userId });
        break;

      case "password":
        const password = event.target.value;
        this.setState(
          Object.assign(this.state.formData, { password: password })
        );
        break;

      default:
        break;
    }
  };

  checkValidity(){

  }

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction={"row"}
        justifyContent="center"
        alignItems="stretch"
        className="h-screen min-h-min w-screen p-0 m-0 bg-login-img bg-no-repeat bg-bottoms bg-cover bg-center bg-blend-overlay bg-stone-700"
      >
        <Grid
          container
          direction={"row"}
          item
          xs={12}
          md={12}
          lg={12}
          justifyContent="center"
          alignItems="center"
        >
          <div
            className="flex gap-6 flex-col h-fit w-96 rounded-xl bg-blue-300 p-10 m-5 md:m-0 bg-opacity-10  backdrop-blur-sm"
            style={{ border: "1px solid rgba(255, 255, 255, 0.09)" }}
          >
            <Grid item>
              <Typography
                variant="h4"
                className="text-center uppercase font-bold text-white"
              >
                Login
              </Typography>
            </Grid>
            <ValidatorForm
              onSubmit={this.handleSubmit}
              onError={(errors) => console.log(errors)}
            >
              <Grid item container direction={"column"} rowGap="20px">
                <TextValidator
                  label="User Name"
                  onChange={this.handleChange}
                  name="userName"
                  value={this.state.formData.driverId}
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                  className={[classes.textField, "w-full text-red-500"]}
                />
                <TextValidator
                  label="Password"
                  onChange={this.handleChange}
                  name="password"
                  value={this.state.formData.password}
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                  type={"password"}
                  className={[classes.textField, "w-full"]}
                />
                <Link to="dashboard">
                  <CommonButton
                    size="large"
                    variant="contained"
                    label="Login"
                    type="submit"
                    onClick={() => {
                      this.checkValidity();
                    }}
                    className="text-white w-full bg-blue-500 font-bold tracking-wide"
                  />
                </Link>

                <Typography variant="p" className={'text-white'}>
                  You are not a member? <Link to={'/register'} className={'font-semibold'}> Register Now</Link>
                </Typography>
                
              </Grid>
            </ValidatorForm>
          </div>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styleSheet)(LoginAdmin);
