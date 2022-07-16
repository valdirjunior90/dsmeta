import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/requests';
import './styles.css'

interface Props {
    saleId:number
}

const  NotificationButton = ({saleId}:Props) => {
    
    const handleClick = (id:number) => {
        axios.get(`${BASE_URL}/sales/${id}/notification`)
            .then(response=>{
                console.log("sucesso")
            })
    }
    
    return (
        <div className="dsmeta-red-btn" onClick={()=>handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;
