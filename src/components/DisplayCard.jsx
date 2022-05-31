import { MailOutlined, PhoneOutlined, GlobalOutlined, HeartTwoTone, EditOutlined, DeleteFilled } from '@ant-design/icons'
import  "./DisplayCard.css"
const DisplayCard = ({ userData }) => {
    return (
        <div className="card" >
            <div className="avatar">
                <img src={userData.image} alt="" />
            </div>
            <div className="details">
                <div className="card-title"><p>{userData.name}</p></div>
                <div className="mail"><MailOutlined /><p>{userData.email}</p></div>
                <div className="phone"><PhoneOutlined /><p>{userData.phone}</p></div>
                <div className="web"><GlobalOutlined /><p>{userData.website}</p></div>
            </div>
            <div className="actions">
                <HeartTwoTone twoToneColor="#eb2f96" />
                <EditOutlined />
                <DeleteFilled />
            </div>

        </div>
    )
};

export default DisplayCard