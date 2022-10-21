import * as React from "react";
import Layout from "../../components/Layout";
import NewsRoll from '../../components/NewsRoll';

export default class NewsIndexPage extends React.Component {
  render() {
    return (
      <Layout
        title="Новости кино —  Последний Киногерой"
        description="Новости кино со всего мира! Трейлеры, постеры, кадры, биографии актеров, описания фильмов и сериалов."
      >
        <div
          className="margin-top-0"
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "#fccd04",
              color: "black",
              padding: "1rem",
              margin: '0 auto',
              textAlign: "center",
            }}
          >
            Новости
          </h1>
        </div>
        <section className="section">
          <div className="container" style={{ maxWidth: '1600px' }}>
            <div className="content">
              <NewsRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
