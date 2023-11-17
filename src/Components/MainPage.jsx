import React, { useState, useEffect } from 'react';
import "./Styles/mainpage.css";

const MainPage = () => {
    const [videourl,setVideourl]=useState(null)
  const [beforeVideoUrl, setBeforeVideoUrl] = useState(null);
  const [afterVideoUrl, setAfterVideoUrl] = useState(null);

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const url = URL.createObjectURL(file);
    setVideourl(url);
    setBeforeVideoUrl(null); // Set "Before Applying DD" video URL
    setAfterVideoUrl(null); // Clear "After Applying DD" video URL
  };

  useEffect(() => {
    if (videourl) {
      setAfterVideoUrl(videourl); 
     setBeforeVideoUrl(videourl)
    }
  }, [videourl]);

  return (
    <div className="video-player-container">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        />
      </div>
      <div className='vidocontainer'>
        <div style={{ width: "100%", margin: "10px" }}>
          {beforeVideoUrl && (
         <><video controls style={{ border: "2px black solid", height: "20rem", width: "90%" }}>
              <source src={beforeVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h4>Before Applying DD</h4>
            </>   
          )}
          
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          {afterVideoUrl && (
        <>   <video controls style={{ border: "2px black solid", height: "20rem", width: "90%" }}>
              <source src={afterVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
             <h4>After Applying DD</h4></> 
          )}
         
        </div>
      </div>
    </div>
  );
};

export default MainPage;
