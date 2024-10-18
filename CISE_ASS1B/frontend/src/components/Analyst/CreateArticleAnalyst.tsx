import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Article, DefaultEmptyArticle } from "../Article";
import '../CSS/CreateArticle.css';

const CreateArticleComponent = () => {
  const navigate = useRouter();

  const [article, setArticle] = useState<Article>(DefaultEmptyArticle);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setArticle({ ...article, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(article);
    fetch("http://localhost:8082/api/articles", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
    })
      .then((res) => {
        console.log(res);
        setArticle(DefaultEmptyArticle);
        // Redirect to the article list
        navigate.push("/Analyst-home");
      })
      .catch((err) => {
        console.log('Error from CreateArticle: ' + err);
      });
  };

  return (
    <div className="CreateArticle">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <h1 className="title">ARTICLE SUBMISSION</h1>

          <div className="form-background">
            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Article"
                  name="title"
                  className="form-control"
                  value={article.title}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Authors"
                  name="authors"
                  className="form-control"
                  value={article.authors}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="DOI"
                  name="DOI"
                  className="form-control"
                  value={article.DOI}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="date"
                  placeholder="Published Date"
                  name="publication_year" // Updated to match the field in Article type
                  className="form-control"
                  value={article.publication_year?.toString()} // Format date for input
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Volume"
                  name="volume"
                  className="form-control"
                  value={article.volume}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Number"
                  name="number"
                  className="form-control"
                  value={article.number || ''}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Pages"
                  name="pages"
                  className="form-control"
                  value={article.pages || ''}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <textarea
                  placeholder="Content of the Article"
                  name="content" // New field for article content
                  className="form-control"
                  value={article.content || ''} // Updated to include content
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <textarea
                  placeholder="Short Descriptor"
                  name="descriptor" // New field for article content
                  className="form-control"
                  value={article.descriptor || ''} // Updated to include content
                  onChange={onChange}
                />
              </div>

              
              <button
                type="submit"
                className="btn btn-outline-warning btn-block mt-4 mb-4 w-100 btn-active-bg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CreateArticleComponent;
