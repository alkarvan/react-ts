import {useSearchParams} from "react-router-dom";

const usePageQuery = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const currentPage = query.get('page');

    return {
        currentPage,
        prevPage: () => setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        }),
        nextPage: () => setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }
}

export {
    usePageQuery
}