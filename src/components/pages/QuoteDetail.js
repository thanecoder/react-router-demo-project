import React from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

function QuoteDetail() {
    const match = useRouteMatch();
  const params = useParams();
  const DUMMY_QUOTES = [
    { id: "q1", author: "Max", text: "Learning React is fun!" },
    { id: "q2", author: "Maximilian", text: "Learning React is great!" },
  ];
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
            <Link className='btn--flat' to={`${match.url}/comments`}>
                Load Comments
            </Link>
            </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;
