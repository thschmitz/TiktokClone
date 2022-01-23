import Layout from "../components/Layout"
import Feed from "../components/Feed"
import Suggestions from "../components/Suggestions"
import {openDB} from "../lib/openDB"

function Index({ posts }) {
    return(
    <Layout>
        <Feed posts={posts}></Feed>
        <Suggestions></Suggestions>
    </Layout>
    )
}

export async function getServerSideProps(context) {

  const db = await openDB();
  const data = await db.collection("feed").find().toArray();



  /*
      const data = [
    {
      id: 1,
      author: {
        id: 1,
        avatar:
          'https://p16-va.tiktokcdn.com/img/musically-maliva-obj/1658913186824198~c5_100x100.jpeg',
        name: 'Lucas Nhimi',
        username: 'lucasnhimi',
      },
      description: '',
      tags: [{ title: '#youtube' }, { title: '//#endregionclone' }],
      songName: 'WAP (feat. Megan Thee Stallion) - Cardi B',
      videoUrl:
        'https://v16-webapp.tiktok.com/e7621a26191c060bb1fccec77d6271de/61ecda57/video/tos/useast2a/tos-useast2a-ve-0068c001/91c354b9f0e7403daabfe8080c445cd0/?a=1988&br=3732&bt=1866&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fxrkag3-I&l=202201222229380102230731611011E1AE&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amhzZjc6ZmVrOjMzNzczM0ApOWdoNTszMzxlNzxmMzY0NmdnMS42cjRvZS1gLS1kMTZzczQ0YzViNl9iYi0xYDY2NjY6Yw%3D%3D&vl=&vr=',
      likes: 650,
      comments: 10,
      replies: 50,
    },
    {
      id: 2,
      author: {
        id: 1,
        avatar:
          'https://p16-va.tiktokcdn.com/img/musically-maliva-obj/1658913186824198~c5_100x100.jpeg',
        name: 'Lucas Nhimi',
        username: 'lucasnhimi',
      },
      description: 'Vídeo teste para clone de interface',
      tags: [{ title: '#youtube' }, { title: '#clone' }],
      songName: 'Tampa Curhat Beat - TampaCurhat',
      videoUrl:
        'https://v16-web-newkey.tiktokcdn.com/377f706b8664a2b3c68420b8740c311c/5f6cf201/video/tos/alisg/tos-alisg-pve-0037c001/9fb4d52876d340eda534984097fb7d1b/?a=1988&br=1726&bt=863&cr=0&cs=0&dr=0&ds=3&er=&l=202009241322340101890710710A01D2D5&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajpsM2g7Zm9ydzMzMzczM0ApZDQ4OGY5ZWQ5NzUzOTlnOGdyMjQ1X3FgYGlfLS0tMTRzc2FjYjUyXy8yMy5hMDUyMDY6Yw%3D%3D&vl=&vr=',
      likes: 650,
      comments: 10,
      replies: 50,
    },
    ]
    */

    return{
        props: {
            posts: JSON.parse(JSON.stringify(data)),
        }
    }
}

export default Index