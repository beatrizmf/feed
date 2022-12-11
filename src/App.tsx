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
  { type: 'paragraph', content: 'Hello everybody 👋' },
  { type: 'paragraph', content: 'I just uploaded another project to my portfolio. It is a responsive feed with posts, comment and likes . The name of the project is Feed. 🚀' },
  { type: 'link', content: 'https://github.com/beatrizmf/feed' }
]

const comments = [
  {
    id: 1,
    content: 'great!',
    author,
    likesCount: 10,
    publishedAt: new Date('2022-06-04 20:00:00')
  },
  {
    id: 2,
    content: 'awesome!',
    author,
    likesCount: 8,
    publishedAt: new Date('2022-09-04 22:00:00')
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
