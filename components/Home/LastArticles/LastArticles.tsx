import Link from "next/link";
import React from "react";
import { articleItems } from "../../../data/articles.data";
import Article from "./Article/Article";
import lastArticle from "./lastArticles.module.scss";

const LastArticles = () => {
  return (
    <div className={lastArticle.mainC}>
      <h2>Last Articles</h2>
      <div className={lastArticle.articleHolder}>
        {articleItems.map((a) => (
          <Article a={a} key={a.id} />
        ))}
      </div>
      <Link href="/blogs">
        <button>Read More</button>
      </Link>
    </div>
  );
};

export default LastArticles;
