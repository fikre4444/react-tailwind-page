import GlowyButton from './GlowyButton';
import SelectElement from './SelectElement';
import Card from './Card';
import Image4 from '../assets/image4.png';
import Image3 from '../assets/image3.png';
import Image2 from '../assets/image2.png';
import Image1 from '../assets/image1.png';

function MainContent() {

  const title = "Order";
  const option = ['Newest First', 'Oldest First', 'A - Z', 'Z - A'];

  const titles = ['Auth', 'Cors', 'Https'];
  const options = 
  [
    ['All', 'No Auth', 'API Key', 'OAuth', 'User-Agent'],
    ['All', 'Yes', 'No', 'Unknown'],
    ['All', 'Yes', 'No']
  ];

  const CardDetails = 
  [
    {
      title: "Genius",
      category: "Music",
      description: "Crowd Sourced lyrics and music knowledge.",
      image: Image3,
    },
    {
      title: "Discogs",
      category: "Music",
      description: "Music.",
      image: Image2,
    },
    {
      title: "Vagalume",
      category: "Music",
      description: "Crowdsourced lyrics and music knowledge.",
      image: Image1,
    },
    {
      title: "Openwhyd",
      category: "Music",
      description: "Download curated playlists of streaming tracks (YouTube, SoundCloud, etc...).",
      image: Image4,
    }
  ];
  
                  

  return (
    <div className="flex-[0.75] py-5 px-3">
      <GlowyButton />
      <div className="pt-10">
        <h1 className="text-3xl mb-10 font-inter font-bold tracking-wider">MUSIC</h1>
        <SelectElement title={title} options={option} />
        <div className="flex flex-wrap gap-3 my-3">
          {titles.map((title, index) => (<SelectElement key={title} title={title} options={options[index]} />))}
        </div>
        <div className="flex gap-3 flex-wrap mt-2"> {/*This will hold all the cards */}
            {CardDetails.map(({title, category, description, image}) => 
              (<Card key={title} title={title} category={category} description={description} image={image} />)
            )}  
            {CardDetails.map(({title, category, description, image}) => 
              (<Card key={`${title}1`} title={title} category={category} description={description} image={image} />)
            )}
            {CardDetails.map(({title, category, description, image}) => 
              (<Card key={`${title}2`} title={title} category={category} description={description} image={image} />)
            )} 
            {CardDetails.map(({title, category, description, image}) => 
              (<Card key={`${title}3`} title={title} category={category} description={description} image={image} />)
            )} 
        </div>
      </div>
    </div>
  )
}

export default MainContent;
