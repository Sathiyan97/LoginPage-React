import './App.css';
import React, {Component} from 'react';
import Input from "./components/input";
import Google from "./img/google.png"
import Logo from "./img/dell.png"

class App extends Component {
    render() {
        return (
            <div className="flex vh-100">
                <div className="vw-50 colum lef-background ">
                    <div className="logo">
                        <img src={Logo} alt="Dell" width="120px" height="60px"/>
                    </div>
                    <div className="content white-text">
                        <label className="content-main">Designed for Individuals</label> <br/>
                        <label>See the analyst and
                            grow your
                            data </label> <br/>
                        <label className="content-sub">remotely,from anywhere!</label>
                    </div>

                </div>
                <div className="vw-50 right-background   ">
                    <div className="colum flex-gap justify-10vh align-7vw ">
                        <p className="head-style">Login</p>

                        <Input label='Email Address' id='email' placeholder="name@gmail.com"/>
                        <Input label='Password' isPassword={true} id='password' placeholder="password"/>

                        <div className="row margin-minus">
                            <input type="checkbox"/>
                            Remember Password
                        </div>
                        <div className="row">
                            <button className="btn-size blue white-text horizontal-center vertical-center"> Login
                            </button>
                            <br/> <br/>
                            Don't have an account <a href="#">Sign up</a>
                        </div>
                        <div className="hr-50">
                            <hr/>
                        </div>
                        <div>
                            <button className="btn-size col-gap horizontal-center vertical-center"><img src={Google}
                                                                                                        alt="google img"
                                                                                                        width="20"
                                                                                                        height="20"/>Authorize
                                with Google
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default App;