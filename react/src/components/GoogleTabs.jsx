import React, { useState } from "react";

export default function () {
  const [currentTab, setTab] = useState("all");



  return (
    <div className="googleTab">
      <ul>
        <li onClick={() => setTab("all")}>All</li>
        <li onClick={() => setTab("image")}>Images</li>
        <li onClick={() => setTab("video")}>Videos</li>
        <li onClick={() => setTab("news")}>News</li>
      </ul>
      {currentTab == "all" && 
        <div>
          <h2>All Section</h2>
          <p>this is all</p>
        </div>
      }

      {currentTab == "image" && 
        <div>
          <h2>Images Section</h2>
          <p>images</p>
        </div>
      }

      {currentTab == "video" && 
        <div>
          <h2>Videos Section</h2>
          <p>Videos</p>
        </div>
      }

      {currentTab == "news" && 
        <div className="news">
          <h2>News Section</h2>
          <p>news</p>
        </div>
      }
    </div>
  );
}
