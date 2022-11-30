import { useDispatch } from 'react-redux';
import * as session from '../../store/session'

const Demo = () => {
    const dispatch = useDispatch()

    const handleClick = async (e) => {
        e.preventDefault()

        const credential = 'demo@aa.io';
        const password = 'password'
        await dispatch(session.login(credential, password))
            .catch(async (res) => {
                return await res.json()
            });
    }

    return (
        <button id="demo-btn" onClick={handleClick} type='submit'>Demo user</button>
    )
}

export default Demo;
