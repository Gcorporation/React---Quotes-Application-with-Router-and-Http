import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Comments from '../components/comments/Comments';
import useHttp from '../hooks/hooks/use-http';
import HighLightesQuote from '../components/quotes/HighlightedQuote';
import { getSingleQuote } from'../lib/lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is Fun!' },
    { id: 'q2', author: 'Tax', text: 'Learning React is Blahh!' },
    { id: 'q3', author: 'Snax', text: 'Learning React is SHhhhhhhhh!' },
];

const QuoteDetail = () => {

    const params  = useParams();
    const match = useRouteMatch();

    const { quoteId } = params;

    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getSingleQuote, true);

    useEffect(()=>{
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    console.log(match);

    if(status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if(error) {
        return (
            <p className='centered focused'>{error}</p>
        )
    }

    if(!loadedQuotes.text) {
        return <p>No Quote Found!</p>
    }

    return (
        <Fragment>
            <HighLightesQuote text={loadedQuotes.text} author={loadedQuotes.author} />
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