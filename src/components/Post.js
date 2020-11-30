const Post = ({item}) => {

    return (
        <div>
            <h5>{item.title}</h5>
            <p>{item.body}</p>
        </div>
    )
}

export default Post;