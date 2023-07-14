import { useState, useEffect} from 'react'
import { getPostsPage} from '../components/axios'


const usePosts = (pageNum = 1) => {

    const [results, setRestults] = useState([])
    const [isLoading, setIdLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState({})
    const [hasNextPage, setHasNextPage] = useState(false)


useEffect(()=> {
    setIsLooading(true)
    setIsError(false)
    setError({})

    const controller = new AbortController()
    const {signal}  = controller


    getPostsPage(pageNum, {signal})
        .then(data=> {
            setRestults(prev =>[...prev, ...data])
            setHasNextPage(Boolean(data.length))
            setIsLoading(false)
        })

        .catch( e => {
            setIsLoading(false)
            if (signal.aborted) return 
            setIsError(true)
            setError({message : e.message})
        })

    return () => controller.abort()
}, [pageNum])
    return{ isLoading, isError, error, results, hasNextPage}


}




export default usePosts