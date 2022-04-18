import React from "react";
import { useState } from "react";
import MyLoader  from "./Skeleton";
const Icon = (src)=>  {
    const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {loaded ? null : (
    <MyLoader/>
      )}
      <img
        style={loaded ? {} : { display: 'none' }}
        src={src.src}
        alt={'app-icon'}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );

    
        };
export default Icon;