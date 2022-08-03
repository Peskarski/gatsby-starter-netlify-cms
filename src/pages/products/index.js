import * as React from "react";
import Layout from "../../components/Layout";
import ProductRoll from "../../components/ProductRoll";

export default function ReviewsIndexPage() {
  return (
      <Layout
        title="Набор блогера"
        description="Набор блогера"
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
            Набор блогера
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ProductRoll />
            </div>
          </div>
        </section>
      </Layout>
  );
}
