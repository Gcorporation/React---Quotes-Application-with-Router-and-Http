import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { Fragment } from "react";
import Comments from '../components/comments/Comments';

import HighLightesQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is Fun!' },
    { id: 'q2', author: 'Tax', text: 'Learning React is Blahh!' },
    { id: 'q3', author: 'Snax', text: 'Learning React is SHhhhhhhhh!' },
];

const QuoteDetail = () => {

    const params  = useParams();
    const match = useRouteMatch();

    console.log(match);

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    return (
        <Fragment>
            <HighLightesQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;