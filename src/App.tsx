import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

const author = {
  avatarUrl: 'https://github.com/beatrizmf.png',
  name: 'Beatriz Felix',
  role: 'Software Engineer'
}

const content: Content[] = [
  { type: 'paragraph', content: 'Fala galera 👋' },
  { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
  { type: 'link', content: 'jane.design/doctorcare' }
]

const comments = [
  {
    id: 1,
    content: 'great!',
    author,
    likesCount: 10,
    publishedAt: new Date('2022-05-04 20:00:00')
  },
  {
    id: 2,
    content: 'awesome!',
    author,
    likesCount: 10,
    publishedAt: new Date('2022-05-04 22:00:00')
  }
]

const posts = [
  {
    id: 1,
    author,
    content,
    comments,
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author,
    content,
    comments,
    publishedAt: new Date('2022-05-10 20:00:00')
  }
]

function App () {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              comments={comments}
            />)
          )}
        </main>
      </div>
    </div>
  )
}

export default App
