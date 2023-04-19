import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAlbums } from "../api";

export default function Album() {
  const { id } = useParams();
  const [albums, setAlbums] = useState([]);

  const getAlbums = async () => {
    const { data } = await fetchAlbums(id);
    console.log(data);
    setAlbums(data);
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <div>
      <h1>Album List</h1>
      {albums &&
        albums.map((album) => (
          <div key={album.id}>
            <p>{album.title}</p>
            <hr />
          </div>
        ))}
    </div>
  );
}