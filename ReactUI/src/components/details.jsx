import { readDataByName, readDataByAsignee } from '../api/api.js'
import InfoCard from './infoCard';
import './details.css'
import { useState } from 'react';

const Details = (props) => {
    const [asignee, setAssignee] = useState('')
    const [name, setName] = useState('')
    const cards = props.userData.map((user, id) => {
        return (<InfoCard key={id} details={user} setUserData={props.setUserData} />)
    })
    
    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeAsignee = (e) => {
        setAssignee(e.target.value)
    }

    const getByName = () => {
        readDataByName(props.setUserData, name)
    }
    const getByAsignee = () => {
        readDataByAsignee(props.setUserData, asignee)
    }
    return (<div>
        <div className="input"> <input type="text" name="name" value={name} className='inputBox' placeholder="name" onChange={handleChangeName} /> <button className='inputButton' onClick={getByName}>get</button></div>
        <div className="input"> <input type="text" name="asignee" value={asignee} className="inputBox" placeholder="asignee" onChange={handleChangeAsignee} /> <button className='inputButton' onClick={getByAsignee}>get</button></div>
        {cards}
    </div>)
}

export default Details