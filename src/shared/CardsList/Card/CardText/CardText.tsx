import React from 'react';
import styles from './cardtext.css';

export function CardText() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img src="" alt="avatar" className={styles.avatar} />
          <a href="#user-url" className={styles.userName}>Дмитрий Гришин</a>
        </div>
        <span className={styles.createAt}><span className={styles.publishedLabel}>опубликованно</span> 4 часа назад</span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Следует отметить что новая модель бла - бла - бла ифцвфцвфтдлфтлдаутлдфцатлдфцатлдфцалтдфцатлдфцлдтфцатлдфцалтдфцатлдфцадтлфцадлт 
        </a>
      </h2>
    </div>
  );
}
