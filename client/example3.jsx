const React = require('react');
const { useState, useEffect } = React;
const { createRoot } = require('react-dom/client');

const SongContainer = (props) => {
    const [songs, setSongs] = useState(props.songs);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const loadSongsfromServer = async () => {
            console.log('Loading Songs');
            const response = await fetch('/getSongs');
            const data = await response.json();
            setSongs(data);
        }
        loadSongsfromServer();
    }, [reload]);

    if (songs.length === 0) {
        return (
            <>
                <h1>No songs Yet!</h1>
            </>
        )
    }
    const songList = songs.map((s) => {
        return (
            <li key={s.title}>{s.artist} - <i>{s.title}</i>
            </li>);
    })

    return (
        <div>
            <h1>My Favorite Songs!</h1>
                 <button onClick={()=>{setReload(!reload)}}>Reload Songs</button>
            <ul>
                {songList}
            </ul>
        </div>
    )
}

const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(<SongContainer songs={[]} />);
}

window.onload = init;