import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPhotos } from "../api";

export default function Photo() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      const response = await fetchPhotos(albumId);
      setPhotos(response.data);
    };
    getPhotos();
  }, [albumId]);

  return (
    <div>
      <h1>Photos</h1>
      {photos.map((photo) => (
        <div key={photo.id}>
          <h3>{photo.title}</h3>
          <img src={photo.url} alt={photo.title} />
        </div>
      ))}
    </div>
  );
}