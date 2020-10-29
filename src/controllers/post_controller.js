import img from '../images/image.jpg';
import img1 from '../images/awesomebaby.jpg';
import img2 from '../images/cat.jpg';
import img3 from '../images/couples.jpg';
// import img4 from '../images/flame.jpg';

const __posts = [
  {
    img: img,
    id: "001",
    title: "A title",
    subtitle: "A subtitle",
    content: `1. Build a customer email list and market directly to them
      One of the most important aspects of having your own website is that you can market directly to website visitors and customers. Unlike marketplaces, where people who buy your product are the customers of the marketplace,
      selling directly to consumers on your website means you get to collect their contact information.
      When you have your customers’ email addresses, you can send them email marketing promotions, offer discounts, and announce new products.

      Getting repeat buyers is much more difficult on a marketplace, because you don’t have direct access to your customers. This gives you fewer opportunities to provide good customer service and promote your other products. 
      Since it’s easier and cheaper to retain a customer than it is to get a new one, communicating with existing customers is a necessary part of generating revenue for your business.

      Not only do you know who has bought from you in the past, but you also know what they bought, how much they spent, and what they are interested in. You can use this information to influence and suggest future purchases.
      `,
    upvotes: 10,
    downvotes: 4,
    comments: ["this is a comment on the first post"]
  },
  {
    img: img1,
    id: "002",
    title: "A title",
    subtitle: "A subtitle",
    content: `1. Build a customer email list and market directly to them
      One of the most important aspects of having your own website is that you can market directly to website visitors and customers. Unlike marketplaces, where people who buy your product are the customers of the marketplace,
      selling directly to consumers on your website means you get to collect their contact information.
      When you have your customers’ email addresses, you can send them email marketing promotions, offer discounts, and announce new products.

      Getting repeat buyers is much more difficult on a marketplace, because you don’t have direct access to your customers. This gives you fewer opportunities to provide good customer service and promote your other products. 
      Since it’s easier and cheaper to retain a customer than it is to get a new one, communicating with existing customers is a necessary part of generating revenue for your business.

      Not only do you know who has bought from you in the past, but you also know what they bought, how much they spent, and what they are interested in. You can use this information to influence and suggest future purchases.
      `,
    upvotes: 0,
    downvotes: 0,
    comments: []
  },
  {
    img: img2,
    id: "003",
    title: "A title",
    subtitle: "A subtitle",
    content: `1. Build a customer email list and market directly to them
      One of the most important aspects of having your own website is that you can market directly to website visitors and customers. Unlike marketplaces, where people who buy your product are the customers of the marketplace,
      selling directly to consumers on your website means you get to collect their contact information.
      When you have your customers’ email addresses, you can send them email marketing promotions, offer discounts, and announce new products.

      Getting repeat buyers is much more difficult on a marketplace, because you don’t have direct access to your customers. This gives you fewer opportunities to provide good customer service and promote your other products. 
      Since it’s easier and cheaper to retain a customer than it is to get a new one, communicating with existing customers is a necessary part of generating revenue for your business.

      Not only do you know who has bought from you in the past, but you also know what they bought, how much they spent, and what they are interested in. You can use this information to influence and suggest future purchases.
      `,
    upvotes: 0,
    downvotes: 0,
    comments: []
  },
  {
    img: img3,
    id: "004",
    title: "A title",
    subtitle: "A subtitle",
    content: `1. Build a customer email list and market directly to them
      One of the most important aspects of having your own website is that you can market directly to website visitors and customers. Unlike marketplaces, where people who buy your product are the customers of the marketplace,
      selling directly to consumers on your website means you get to collect their contact information.
      When you have your customers’ email addresses, you can send them email marketing promotions, offer discounts, and announce new products.

      Getting repeat buyers is much more difficult on a marketplace, because you don’t have direct access to your customers. This gives you fewer opportunities to provide good customer service and promote your other products. 
      Since it’s easier and cheaper to retain a customer than it is to get a new one, communicating with existing customers is a necessary part of generating revenue for your business.

      Not only do you know who has bought from you in the past, but you also know what they bought, how much they spent, and what they are interested in. You can use this information to influence and suggest future purchases.
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