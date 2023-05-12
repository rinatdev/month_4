import style from './Button.module.css'

const Button = (props) =>{
    return(
        <button onClick={() => props.handleClick('rino')}>
            {props.text}
        </button>
    )
}

export default Button