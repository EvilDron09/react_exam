import userImage from './img/user_image.jpg'
import './style/userInfoStyle.css'

export const UserInfo = () => {
    return (
        <div className={"userInfoDiv"}>
            <div>
                <img src={userImage} alt="user" className={"userImage"}/>
            </div>
            <p>User</p>

        </div>
    );
};
