import * as React from "react";
import { createUseStyles } from 'react-jss';
import Layout from "../../components/Layout";

const useStyles = createUseStyles(() => ({
  img: {
    width: '300px',
    height: '375px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',

    '@media (max-width: 767px)': {
      flexDirection: 'column-reverse',
    },
  },
  text: {
    margin: '40px 0 0 40px',
    width: '700px',
    '@media (max-width: 767px)': {
      width: '100%',
      margin: '0 0 20px 0',
    },
  },
  subscribe: {
    width: '360px',
  }
}));

export default function ListIndexPage() {
  const cx = useStyles();
  return (
    <Layout
      title="Кто такой Последний Киногерой?"
      description="Кто такой Последний Киногерой?"
    >
      <section className="section">
        <div className="container">
          <div className="content">
            <div className={cx.container}>
              <img src="img/about.png" className={cx.img} />
              <div className={cx.text}>
                <h2>Кто такой Последний Киногерой?</h2>
                <p>
                  Привет, друзья! Меня зовут Иван Пятовский, более известный как Последний Киногерой. Я беру ваши любимые фильмы, и разбираю по косточкам, особенно криминальные шедевры. Если вы любите анализировать ленты, сценарии и киногероев — Добро пожаловать!
                </p>
                <a
                  href="https://www.youtube.com/channel/UC_YZJoxVlFb5ALSG9Okdmkg?sub_confirmation=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="img/Sbscribe.png" className={cx.subscribe} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
