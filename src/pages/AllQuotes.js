import QuotesList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is Fun!' },
    { id: 'q2', author: 'Tax', text: 'Learning React is Blahh!' },
    { id: 'q3', author: 'Snax', text: 'Learning React is SHhhhhhhhh!' },

]

const AllQuotes = () => {
    return <QuotesList quotes={DUMMY_QUOTES}></QuotesList>
};

export default AllQuotes;