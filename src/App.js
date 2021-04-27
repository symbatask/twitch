import React, {useEffect,useState} from "react";
import Header from "./components/Header";
import {useDispatch, useSelector} from "react-redux";
import {getVideos} from "./redux/actions";
import ReactPlayer from 'react-player'

const App = () => {
    const channel = useSelector((store) => store.channel)
    const videos = useSelector((store) => store.videos)
    const [isShown,setIsShown] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        if (channel) {
            dispatch(getVideos(channel.id))
        }
    }, [channel])

    return (

        <div className="bg-gray-400">
            <Header/>
            <div className="container mx-auto">

                {
                    channel &&
                    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 bg-white">
                        <img className="w-full" src={channel.profile_image_url}
                             alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{channel.display_name}</div>
                            <span
                                className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">broadcaster type : </span>
                            <p className="text-grey-darker text-base">
                                {`${channel.broadcaster_type}`}
                            </p>
                            <span
                                className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">view count : </span>
                            <p className="text-grey-darker text-base">
                                {`${channel.view_count}`}
                            </p>
                            <span
                                className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">created at : </span>
                            <p className="text-grey-darker text-base">
                                {`${channel.created_at}`}
                            </p>
                        </div>

                    </div>


                }
                {
                    videos && videos.map(video =>
                        <a href={video.url} key={video.id} target="_blank">
                            <img src={video.thumbnail_url
                                .replace("%{width", "400")
                                .replace("%{height", "300")} alt=""/>
                        </a>
                    )
                }
                <div className="flex flex-wrap">
                    {
                        videos && videos.map(video =>
                            <div className="mr-4 mt-4">
                                <ReactPlayer
                                    url={`https://www.twitch.tv/videos/${video.id}`}
                                    className="react-player"
                                    playing
                                    width="400px"
                                    height="300px"
                                    controls
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
export default App;
