import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";
import Comments from '../components/comments/Comments';

import HighLightesQuote from '../components/quotes/HighlightedQuote';

const QuoteDetail = () => {

    const DUMMY_QUOTES = [
        { id: 'q1', author: 'Max', text: 'Learning React is Fun!' },
        { id: 'q2', author: 'Tax', text: 'Learning React is Blahh!' },
        { id: 'q3', author: 'Snax', text: 'Learning React is SHhhhhhhhh!' },
    ];

    const params  = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    return (
        <Fragment>
            <HighLightesQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;