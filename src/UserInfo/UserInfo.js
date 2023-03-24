const list = {
    // eslint-disable-next-line no-undef
    listStyle: "none",
    border: "1px solid black"
}

const UserInfo = ({user}) => {
    const {username, tag, location, avatar} = user;
    return (
        <>
            {<ul style={list}>
                <img src={avatar} alt={username} style={{width: 100}}/>
                <li>{username}</li>
                <li>{tag}</li>
                <li>{location}</li>
            </ul>}
        </>
    )
}

export default UserInfo