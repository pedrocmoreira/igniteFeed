import styles from './Post.module.css';

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/40441565?v=4" />
          <div className={styles.authorInfo}>
            <strong>Pedro Moreira</strong>
            <span>Mobile Developer</span>
          </div>
        </div>

        <time title='20 de Novembro de 2022' dateTime='2022-11-20 08:12:03'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
          <p>Fala pessoal! </p>
          <p>Acabei de subir mais um projeto no meu git!</p>
          <p><a href="">pedrocmoreira/igniteFeed</a></p>
          <p><a href="">#teste #estudo</a></p>
      </div>
    </article>
  )
}