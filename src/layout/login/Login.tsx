import React from 'react'
import './Login.css';

export default function Login() {
    return (
        <div>
            <main>
                <div className="box">
                    <div className="inner-box">
                        <div className="forms-wrap">
                            <form action="index.html" autoComplete={"off"} className="sign-in-form">
                                <div className="logo">
                                    <h4>前端学习</h4>
                                </div>
                                <div className="heading">
                                    <h2>欢迎回来</h2>
                                    <h6>Not registered yet?</h6>
                                    <a href="#" className="toggle">Sign up</a>
                                </div>
                                <div className="actual-form">
                                    <div className="input-wrap">
                                        <input id="name" type="text" minLength={4} autoComplete={"off"} required className="input-field" />
                                        <label>Name</label>
                                    </div>
                                    <div className="input-wrap">
                                        <input id="password" type="password" autoComplete={"off"} required className="input-field" />
                                        <label >Password</label>
                                    </div>
                                    <input type="submit" value="SIGN IN" className="sign-btn" />
                                    <p className="text">忘记密码?
                                        <a href="#">获取帮助</a>
                                    </p>
                                </div>
                            </form>
                            <form action="index.html" autoComplete={"off"} className="sign-up-form">
                                <div className="logo">
                                    <h4>前端学习</h4>
                                </div>

                                <div className="heading">
                                    <h2>注册</h2>
                                    <h6>Already have an account?</h6>
                                    <a href="#" className="toggle">Sign In</a>
                                </div>

                                <div className="actual-form">

                                    <div className="input-wrap">
                                        <input id="sign-name" type="text" minLength={4} autoComplete={"off"} required className="input-field" />
                                        <label >Name</label>
                                    </div>

                                    <div className="input-wrap">
                                        <input id="sign-email" type="email" autoComplete={"off"} required className="input-field" />
                                        <label >Email</label>
                                    </div>

                                    <div className="input-wrap">
                                        <input id="sign-password" type="password" autoComplete={"off"} required className="input-field" />
                                        <label >Password</label>
                                    </div>

                                    <input type="submit" value="SIGN UP" className="sign-btn" />

                                    <p className="text"> <input type="checkbox" name="" id="" />注册前我已阅读并同意
                                        <a href="#">服务条款</a>和<a href="#">隐私协议</a>
                                    </p>
                                </div>
                            </form>
                        </div>


                        <div className="carousel">

                            <div className="images-wrapper">
                                <img src="https://img-baofun.zhhainiao.com/pcwallpaper_ugc/live/68ff62863bb9fd90d6fd874802e08568.mp4.jpg"
                                    className="image img-1 " alt="" />
                                <img src="https://wallpaper-static.cheetahfun.com/wallpaper/sites/scifi/pic5.jpg" alt="" className="image img-2 " />
                                <img src="https://img-baofun.zhhainiao.com/pcwallpaper_ugc/live/8bc682fba0a8747155409b3bbc2676ac.mp4.jpg" alt=""
                                    className="image img-3 show" />
                            </div>

                            <div className="text-slider">
                                <div className="text-wrap">
                                    <div className="text-group">
                                        <h2>开始你的学习旅程</h2>
                                        <h2>准备创造奇迹吧</h2>
                                        <h2>学习是一切创建力的开始</h2>
                                    </div>
                                </div>

                                <div className="bullets">
                                    <span className="active" data-value="1"></span>
                                    <span data-value="2"></span>
                                    <span data-value="3"></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
