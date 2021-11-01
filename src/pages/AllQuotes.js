import QuotesList from '../components/quotes/QuoteList';
import useHttp from '../hooks/hooks/use-http';
import { getAllQuotes } from '../lib/lib/api';
import { useEffect } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is Fun!' },
    { id: 'q2', author: 'Tax', text: 'Learning React is Blahh!' },
    { id: 'q3', author: 'Snax', text: 'Learning React is SHhhhhhhhh!' },

];

const AllQuotes = () => {

    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

    useEffect(()=>{
        sendRequest();
    },[sendRequest]);

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

    if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />
    }

    return <QuotesList quotes={loadedQuotes}></QuotesList>
};

export default AllQuotes;