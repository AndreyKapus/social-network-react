import PropTypes from "prop-types";

import UserInfo from "../UserInfo/UserInfo"
import UserStats from "../UserStats/UserStats"

const UserCard = ({user}) => {
    return (
        <div>
            { <div>
                <UserInfo user={user}/>
                <UserStats user={user}/>
            </div>
               
            }
        </div>
    )
};

export default UserCard;

UserCard.propTypes = {}