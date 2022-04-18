import React from 'react';
import useIconFethcer from '../hooks/IconFetcher';
import Icon from './Icon';
const App = ({ app: {icon, id, address, author, descripton,title,tags } ,taq}) => {
  const { isLoading, icons } = useIconFethcer(icon);
  const filtertag = taq.filter(tag => tags.includes(tag.id));
  return (
    <React.Fragment>
    {isLoading ? (
      <p className="loading">Loading...</p>
    ) : (
        <React.Fragment>
        <div className="App" url={`/stories/${id}`}>
            <div className="image-holder">
            <Icon src={icons}></Icon>
            </div>
            <div className="title-and-adress">
              <div className='author'>{title}</div>
              <div className='address'>{address}</div>
            </div>
            <div className="descripton">
            {descripton}
            </div>
            <div className="author">
                {author}
            </div>
            <div className="tags-holder">
              {filtertag.map((tag) => (
                <div className="tag" key={tag.id}>
                  {tag.name} <span>+</span>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>)}
        </React.Fragment>
   
     
    
  );
};

export default App;