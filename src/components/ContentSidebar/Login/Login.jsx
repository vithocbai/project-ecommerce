import InputCommon from "@components/InputCommon/InputCommon";
import styles from './styles.module.scss'
import Button from "@components/Button/Button";

function Login() {
    const {container, title, signIn, inputCheck ,login, formLabel, lostPass, lostPassLink} = styles
    return (  
        <div className={container}>
            <div className={title}>
                <a href="" className={signIn}>Sign In</a>
            </div>
            <InputCommon label={"Username or email"} type={'email'} isRequred={true}/>
            <InputCommon label={"Password "} type={'password'} isRequred={true}/>

            <div>
                <input type="checkbox" className={inputCheck} />
                <label htmlFor="" className={formLabel}>
                    Remember me
                </label>
            </div>

            <button type="submit" className={login}>
                Login
            </button>
        
            <p className={lostPass}>
                <a href="" className={lostPassLink}>
                    Lost your password?
                </a>
            </p>

        </div>
    );
}
export default Login;