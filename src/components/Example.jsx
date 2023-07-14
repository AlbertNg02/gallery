import { useRef, useCallback } from 'react'
import Post from './Post'
import { useInfiniteQuery } from 'react-query'
import { getPostsPage } from './axios'

const Example = () => {

    const {
        fetchNextPage, //function 
        hasNextPage, // boolean
        isFetchingNextPage, // boolean
        data,
        status,
        error
    } = useInfiniteQuery('/posts', ({ pageParam = 1 }) => getPostsPage(pageParam), {
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length ? allPages.length + 1 : undefined
        }
    })

    const intObserver = useRef()
    const lastPostRef = useCallback(post => {
        if (isFetchingNextPage) return

        if (intObserver.current) intObserver.current.disconnect()

        intObserver.current = new IntersectionObserver(posts => {
            if (posts[0].isIntersecting && hasNextPage) {
                console.log('We are near the last post!')
                fetchNextPage()
            }
        })

        if (post) intObserver.current.observe(post)
    }, [isFetchingNextPage, fetchNextPage, hasNextPage])

    if (status === 'error') return <p className='center'>Error: {error.message}</p>





    // Gallery logic
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => {
            images[item.replace('./', '')] = r(item);
        });
        return images;
    }

    const data_gallery = importAll(
        require.context('../uploads', true, /\.(jpg|jpeg)$/)
    );

    if (status === 'error') return <p className='center'>Error: {error.message}</p>;

    const galleryContent = Object.entries(data_gallery).map(([key, value], index) => {
        return (
            <div className='pics' key={index}>
                <img src={value} style={{ width: '100%' }} />
            </div>
        );
    });

    const content = data?.pages.map(pg => {
        return pg.map((post, i) => {
            if (pg.length === i + 1) {
                return <Post ref={lastPostRef} key={post.id} post={post} />
            }
            return <Post key={post.id} post={post} />
        })
    })

    return (
        <>
            <h1 id="top">&infin; Infinite Query &amp; Scroll<br />&infin; Ex. 2 - React Query</h1>
            <div className='gallery'>{galleryContent}</div>
            {content}
            {isFetchingNextPage && <p className="center">Loading More Posts...</p>}
            <p className="center"><a href="#top">Back to Top</a></p>
        </>
    )
}
export default Example