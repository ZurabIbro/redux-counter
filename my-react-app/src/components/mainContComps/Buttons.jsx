import styles from "./MainCont.module.css"
import { useDispatch } from "react-redux"


const Buttons = () => {
    const dispatch = useDispatch();
const handleInc = () => {
    dispatch({type: 'plus'})
}
const handleDec = () => {
    dispatch({type: 'minus'})
}
const handleRes = () => {
    dispatch({type: 'reset'})
}
    return(
        <div className={styles.buttons}>
            <button className={styles.button1} onClick={handleInc}>Увеличить</button>
            <button className={styles.button2} onClick={handleDec}>Уменьшить</button>
            <button className={styles.button3} onClick={handleRes}>Сбросить</button>
        </div>
    )
}

export default Buttons