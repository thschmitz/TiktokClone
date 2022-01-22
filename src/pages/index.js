import Layout from "../components/Layout"

function Index({posts = []}) {
    return <Layout>
        <Feed posts={posts}></Feed>
        <Seggestions></Seggestions>
    </Layout>
}

export default Index