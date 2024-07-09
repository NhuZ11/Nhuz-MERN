import React, { useState } from "react";

export default function () {
  const [currenttab, setTab] = useState("all");



  return (
    <div className="googleTab">
      <p>{currenttab}</p>

      <ul>
        <li onClick={() => setTab("all")}>All</li>
        <li onClick={() => setTab("image")}>Images</li>
        <li onClick={() => setTab("video")}>Videos</li>
        <li onClick={() => setTab("news")}>News</li>
      </ul>
      {currenttab == "all" && 
        <div>
          <h2>All Section</h2>
          <p>this is all</p>
        </div>
      }

      {currenttab == "image" && 
        <div>
          <h2>Images Section</h2>
          <p>images</p>
        </div>
      }

      {currenttab == "vioeos" && 
        <div>
          <h2>Videos Section</h2>
          <p>Videos</p>
        </div>
      }

      {currenttab == "news" && 
        <div className="news">
          <h2>News Section</h2>
          <p>news</p>
        </div>
      }
    </div>
  );
}
