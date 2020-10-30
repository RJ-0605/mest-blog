import img from '../images/microphone.jpg';
import img1 from '../images/awesomebaby.jpg';
import img2 from '../images/cat.jpg';
import img3 from '../images/couples.jpg';
// import img4 from '../images/flame.jpg';

const __posts = [
  {
    img: img,
    id: "001",
    title: "Studio Equipment",
    subtitle: "Leasing for Multimedia: Audio & Studio Equipment",
    content: `Though most industries suffered downturns during the Great Recession, traditional studio recording is still undergoing a paradigm shift that began with the advent of the internet. 
              File sharing and digital downloads have changed the way consumers buy music, and the advances in home studio equipment has diminished the need for professional outfits. 
              Exacerbating this shift in production, many television and film companies are transitioning to in-house studios for their audio needs. This may seem like a lot of doom and gloom, but it is actually a rare opportunity.

              Currently the audio recording industry generates upwards of $800 million annually, with over 4,600 firms in operation and the majority of those firms concentrated in the West, Mid-Atlantic and Southeast regions of the United States. 
              It’s true that larger studios are facing diminishing returns and the industry as a whole is slated to decline in the next decade, but that is exactly what makes this an exciting time for entrepreneurs.

              There will always be a need for professional sound recording equipment, and with so many young artists turning to the internet for exposure, the demand for the equipment – if not the corporate face behind it – is greater than ever. In addition, many advertising firms are using the internet as a new medium of expression, 
              creating marketing campaigns that are slick, fun and professional – more than just the commercials of the past. For these entities, recording facilities as well as post-production expertise are essential to their branding.
          `,
    upvotes: 10,
    downvotes: 4,
    comments: ["this is a comment on the first post"]
  },
  {
    img: img1,
    id: "002",
    title: "Baby Products",
    subtitle: "Baby Product Market Size, Share & Trends Analysis Report By Product",
    content: `The global baby product market size was valued at USD 10.91 billion in 2017 and is expected to register a CAGR of 5.5% over the forecast period on account of rising spending capability and changing lifestyles. 
              Rapid urbanization and growing middle-class population across several developing regions are driving the market further. Changing lifestyle, particularly in developing countries, 
              has encouraged the adoption of convenience-oriented routine, making these items desirable, which will fuel the industry growth over the forecast period.

              Moreover, rising consumer awareness regarding child health is boosting the sales of these products, thereby augmenting industry growth. Manufacturers, with the support of government and NGOs, have been promoting baby hygiene,
               which in turn will fuel the demand for various cosmetics and toiletries like skin, hair care, and other products. Baby food is the second-largest segment and is expected to gain significant share over the forecast period.
           `,
    upvotes: 0,
    downvotes: 0,
    comments: []
  },
  {
    img: img2,
    id: "003",
    title: "Retail Pet Stores",
    subtitle: "Brief Summary of Laws Affecting Retail Pet Stores Ashley Duncan(2006)",
    content: `Over half of all households in America have at least one pet. 
            The most common types of animals kept as pets are birds, cats, dogs, fish, reptiles, and small animals such as hamsters and guinea pigs. While some of these animals are available for adoption at local humane societies, 
             most people buy their pets from retail pet stores. Since there are so many animals being housed at retail pet stores, many welfare issues exist, including the availability of veterinary care, food and water, proper housing, and proper sanitation.

            The health and safety of animals in pet stores is an important issue. Unfortunately, there is no federal law which regulates the care of animals in all pet stores. To find laws that address the care of animals in pet stores, 
            you must look at state laws.
            There are currently fifteen states which do not have any laws regulating pet stores. 
           The pet store laws in the other thirty-five states plus the District of Columbia greatly vary.
      `,
    upvotes: 0,
    downvotes: 0,
    comments: []
  },
  {
    img: img3,
    id: "004",
    title: "Entertainment",
    subtitle: "Studios release movies at home in response to COVID-19",
    content: `TORONTO -- Streaming platforms are joining Hollywood in throwing away the rule book in hopes to attract viewers stuck inside during the COVID-19 pandemic.

              There was already a shakeup in how audiences consumed film and TV entertainment before the outbreak, 
              driven by the growing number of streaming platforms and a slowdown in movie ticket sales.

              But as the entertainment industry scrambles to keep up with COVID-19 developments, 
              films are being pushed off the theatrical release slate and onto video-on-demand platforms at an unprecedented pace.
            `,
    upvotes: 0,
    downvotes: 0,
    comments: []
  }
]

// get all posts from the post variable
// returns an array of posts
export function getAllPosts() {
  return __posts;
}

// add a post to the post variable
// return a post object
export function getPostById( post_id ) {
  return __posts.filter( (post) => post.id === post_id )[0];
}

export function addNewComment( post_id, comment ) {
  if(comment) {
    getPostById(post_id).comments.unshift(comment);
    alert("comment added")
  }
}

export function upvotePost( post_id ) {
  getPostById(post_id).upvotes++;
}

export function downvotePost ( post_id ) {
  getPostById(post_id).downvotes++;
}

export function createNewPost(title, sub_title, image, content, callback) {
  const newPost = {};

  newPost.title = title;
  newPost.subtitle = sub_title;
  newPost.content = content;
  newPost.img = image;
  newPost.comments = [];
  newPost.id = getNewId()

  __posts.unshift(newPost);

  callback();
}

function getNewId() {
  let postLength = __posts.length + 2;
  postLength = "" + postLength + "";
  while(postLength.length < 3) {
    postLength = "0" + postLength;
  }

  return postLength;
}