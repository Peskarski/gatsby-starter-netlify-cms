import * as React from "react";
import Layout from "../../components/Layout";
import ListRoll from "../../components/ListRoll";

export default class ListIndexPage extends React.Component {
  render() {
    return (
      <Layout
        title="Последний Киногерой"
        description="Лучшие фильмы, которые ты можешь посмотреть дома или в кино!"
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
            Подборки фильмов
          </h1>
        </div>
        <section className="section">
          <div className="container" style={{ maxWidth: '1600px' }}>
            <div className="content">
              <ListRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}