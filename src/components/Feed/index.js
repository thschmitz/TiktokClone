function Feed ({posts}) {
    return(
        <Container>
            {posts.map((post, index) => (
                <PostCard key={index} post={post}></PostCard>
            ))}
        </Container>
    )
}

export default Feed