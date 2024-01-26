import {ChangeEvent, FunctionComponent, useState} from "react";
import React from "react";
import style from '../scss/auth.module.scss';
//import {useDidMount} from "rooks";
import {RouteProps} from "react-router";
import logo from '../../../content/img/college_logo.png';

export const Auth: FunctionComponent<RouteProps> = (props) => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [login, setLogin] = useState<string>();
    const [password, setPassword] = useState<string>();
    
    const handleOnChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.validity.valid) return;
        setLogin(event.target.value);
        setIsRegistered(false);
    }

    const handleOnChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.validity.valid) return;
        setPassword(event.target.value);
        setIsRegistered(false);
    }

    const handleAuth = async () => {
        if (!login) {
            return;
        }

        if (!password) {
            return;
        }            
    }

    return (
        <div className={`${style.container}`}>
            <div className={`w-25 `}>
                <div className={`${style.wrapper} card-body`}>
                    <form className={`${style.form} card`}>
                        <div className={`${style.containerImage} image`}>
                            <img style={{'width': '45%'}}
                                 src={logo}
                                 alt="">
                            </img>
                        </div>
                        <div className={`${style.textbox} textbox`}>
                            <input id={"username"} autoFocus={true} className="form-control" type="text" maxLength={25} placeholder="Номер телефона или логин"
                                   onChange={handleOnChangeLogin}>
                            </input>
                        </div>
                        <div className={`${style.textbox} textbox`}>
                            <input id={"password"} className="form-control" type="password" maxLength={25} autoComplete="off" placeholder="Пароль"
                                   onChange={handleOnChangePassword}>
                            </input>
                        </div>
                        <button id={"login-submit"} type="button" className={`${style.button} btn btn-primary`} onClick={handleAuth}
                                disabled={isRegistered}>
                            Войти
                        </button>
                    </form>
                </div>
                <div className={`${style.three} love`}>
                    <span className={`${style.love} love`}>Сделано с любовью</span>
                </div>
            </div>
        </div>
    );
}