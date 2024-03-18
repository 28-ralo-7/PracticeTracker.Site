import { Component } from "react";
import { postDataForLogin } from "../services/accessAPI";
import SessionManager from "../authentication/components/sessionManager";

interface IState{
    userName: string,
    password: string,
    loading: boolean,
    failed: boolean,
    error: string
}

interface IProps {
}

export default class Login extends Component<IProps, IState>{
    constructor(props: any) {
        super(props);

        this.state = {
            userName: "",
            password: "",
            loading: false,
            failed: false,
            error: ''
        };

        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e: any) {
        //this.setState({ [e.target.name]: e.target.value });
    }

    onKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            this.login();
        }
    }

    login() {
        let userInfo = this.state;
        this.setState({
            loading: true
        });

        postDataForLogin('api/Auth/Login', userInfo).then((result: any) => {
            if (result?.token) {

                SessionManager.setUserSession(result.userName, result.token, result.userId, result.usersRole)

                if (SessionManager.getToken()) {
                    this.setState({
                        loading: false
                    });

                    window.location.href = "/home";
                }
            }

            else {
                let errors = '';
                for (const key in result?.errors) {
                    if (Object.hasOwnProperty.call(result.errors, key)) {
                        errors += result.errors[key];

                    }
                }
                errors = errors === '' ? 'Login is unsuccessfull!' : errors;

                this.setState({
                    //errors: "Login failed!",
                    loading: false
                });
            }

        });
    }

    registration(){
        window.location.href = "/admin/user/register";

    }

    render() {
        return (
            <div className="row">
                <div className="login-box col-md-4">
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to access the application</p>
                        <div className="form-group has-feedback">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Please Enter Username"
                                name="userName"
                                onChange={this.onChange}
                                onKeyDown={this.onKeyDown}
                            />
                            <span className="glyphicon glyphicon-user form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Please Enter Password" name="password"
                                   onChange={this.onChange} onKeyDown={this.onKeyDown}
                            />
                            <span className="glyphicon glyphicon-lock form-control-feedback" />
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <button className="btn btn-primary btn-block" onClick={()=>{}}>
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}