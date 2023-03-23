const UserStats = ({user}) => {
    const {stats} = user
    return (
        <>
            {<ul>
                <li>Followers: {stats.Followers}</li>
                <li>Vievs: {stats.views}</li>
                <li>Likes: {stats.likes}</li>
            </ul>}
        </>
    )
}

export default UserStats