const UserInfo = ({user}) => {
    const {username, tag, location, avatar} = user;
    return (
        <>
            {<ul>
                <img src={avatar} alt={username}/>
                <li>{username}</li>
                <li>{tag}</li>
                <li>{location}</li>
            </ul>}
        </>
    )
}

export default UserInfo