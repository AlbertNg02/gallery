import React, { useState, useEffect } from 'react';
import './Gallery.css';
import axios from "axios";
// import { useInfiteQuery } from '@tanstack/react-query'
import Loader from "./Loader";


const Gallery = () => {
    //    const [post, setPost] = useState([]);
    const [urls, setUrls] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://172.104.181.160:1337/api/media-displays?populate[src][data][attributes][formats][0]&pagination[page]=${page}`);
                // Assuming the JSON response is available in response.data
                const data = response.data?.data;

                // Extracting the URLs from the JSON data
                const extractedUrls = extractUrlsFromJson(data);

                // Setting the extracted URLs to the state
                setUrls(prev => [...prev, ...extractedUrls]);
                setLoading(false)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [page]);



    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    };




    // Function to extract URLs from the JSON data
    const extractUrlsFromJson = (data) => {
        console.log("Got some data")
        // console.log(typeof(data))
        // console.log(data)
        // data_json = JSON.parse(data)
        // console.log(data_json)

        const urls = [];

        data.forEach(item => {
            let url;
            // console.log(item.attributes.src.data.attributes.formats.largei)
            if (item.attributes.src.data.attributes.formats.large) {
                url = item.attributes.src.data.attributes.formats.large;
            } else if (item.attributes.src.data.attributes.formats.medium) {
                url = item.attributes.src.data.attributes.formats.medium;
            } else if (item.attributes.src.data.attributes.formats.small) {
                url = item.attributes.src.data.attributes.formats.small;
            } else if (item.attributes.src.data.attributes.formats.thumbnail) {
                url = item.attributes.src.data.attributes.formats.thumbnail;
            } else {
                // Handle the case where none of the formats exist
                // console.error("No available formats for the item:", item);
            }
            urls.push("http://172.104.181.160:1337" + url.url)



        })

        console.log(urls)



        // console.log("Got urls")
        // console.log(data_json)
        return urls;
    };






    return (
        <>


            <div className='gallery'>
                {urls.map((url, index) => {
                    return (
                        <div className='pics' key={index}>
                            <img src={url} style={{ width: '100%', }} />
                        </div>
                    )
                })}
                {loading && <Loader />}
            </div>
        </>
    )
}

export default Gallery;