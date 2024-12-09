// src/components/Blog.jsx
import { useState } from "react";
import BlogPost from "./BlogPost";
import {
  Ecommerce,
  projectFour,
  projectfive,
  projectSix,
  Projectseven,
  projecteight,
} from "../../assets/index";
import { MdOutlineExpandMore } from "react-icons/md";
const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 1,
      title: "First Blog Post",
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias exercitationem earum doloremque delectus, qui id laborum, nesciunt sequi ipsa placeat voluptates beatae? Fuga delectus tenetur repudiandae totam fugiat sapiente culpa!",
      excerpt: "This is the first blog post.",
      content:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui modi rem voluptatibus harum quia laudantium sint eligendi blanditiis dolore vitae consequatur neque, placeat repellat libero nisi, dolorum excepturi illo et. Illo commodi nobis quaerat ipsam. Iure, iste in asperiores aut voluptates nulla obcaecati nobis, id velit eos deserunt. Veritatis consequatur eius aperiam fugit maxime praesentium! Praesentium expedita molestiae labore, laborum ab possimus illum harum ad dolor optio quibusdam quidem deserunt magnam aliquam unde ipsa laboriosam reprehenderit! Voluptates cumque nobis quam sapiente, placeat est voluptatum quae esse veniam sit rerum molestiae sint officia quidem, nihil exercitationem itaque tempora, praesentium maxime facilis?",
      src: projectSix,
    },
    {
      id: 2,
      title: "Second Blog Post",
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias exercitationem earum doloremque delectus, qui id laborum, nesciunt sequi ipsa placeat voluptates beatae? Fuga delectus tenetur repudiandae totam fugiat sapiente culpa!",
      excerpt: "This is the second blog post.",
      content:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui modi rem voluptatibus harum quia laudantium sint eligendi blanditiis dolore vitae consequatur neque, placeat repellat libero nisi, dolorum excepturi illo et. Illo commodi nobis quaerat ipsam. Iure, iste in asperiores aut voluptates nulla obcaecati nobis, id velit eos deserunt. Veritatis consequatur eius aperiam fugit maxime praesentium! Praesentium expedita molestiae labore, laborum ab possimus illum harum ad dolor optio quibusdam quidem deserunt magnam aliquam unde ipsa laboriosam reprehenderit! Voluptates cumque nobis quam sapiente, placeat est voluptatum quae esse veniam sit rerum molestiae sint officia quidem, nihil exercitationem itaque tempora, praesentium maxime facilis?",
      src: projectSix,
    },
    {
      id: 3,
      title: "Second Blog Post",
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias exercitationem earum doloremque delectus, qui id laborum, nesciunt sequi ipsa placeat voluptates beatae? Fuga delectus tenetur repudiandae totam fugiat sapiente culpa!",
      excerpt: "This is the second blog post.",
      content:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui modi rem voluptatibus harum quia laudantium sint eligendi blanditiis dolore vitae consequatur neque, placeat repellat libero nisi, dolorum excepturi illo et. Illo commodi nobis quaerat ipsam. Iure, iste in asperiores aut voluptates nulla obcaecati nobis, id velit eos deserunt. Veritatis consequatur eius aperiam fugit maxime praesentium! Praesentium expedita molestiae labore, laborum ab possimus illum harum ad dolor optio quibusdam quidem deserunt magnam aliquam unde ipsa laboriosam reprehenderit! Voluptates cumque nobis quam sapiente, placeat est voluptatum quae esse veniam sit rerum molestiae sint officia quidem, nihil exercitationem itaque tempora, praesentium maxime facilis?",
      src: projectSix,
    },

    {
      id: 4,
      title: "Second Blog Post",
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias exercitationem earum doloremque delectus, qui id laborum, nesciunt sequi ipsa placeat voluptates beatae? Fuga delectus tenetur repudiandae totam fugiat sapiente culpa!",
      excerpt: "This is the second blog post.",
      content: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui modi rem voluptatibus harum quia laudantium sint eligendi blanditiis dolore vitae consequatur neque, placeat repellat libero nisi, dolorum excepturi illo et. Illo commodi nobis quaerat ipsam. Iure, iste in asperiores aut voluptates nulla obcaecati nobis, id velit eos deserunt. Veritatis consequatur eius aperiam fugit maxime praesentium! Praesentium expedita molestiae labore, laborum ab possimus illum harum ad dolor optio quibusdam quidem deserunt magnam aliquam unde ipsa laboriosam reprehenderit! Voluptates cumque nobis quam sapiente, placeat est voluptatum quae esse veniam sit rerum molestiae sint officia quidem, nihil exercitationem itaque tempora, praesentium maxime facilis?",
      src: projectSix,
    },
    // Add more posts as needed
  ];

  if (selectedPost !== null) {
    const post = posts.find((post) => post.id === selectedPost);
    return <BlogPost post={post} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="w-full class py-20 border-b-[1px] border-b-black">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow-shadowOne">
            <h2 className="text-2xl font-semibold  text-designColor uppercase">
              {post.title}
            </h2>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <div className="flex flex-col lgl:flex-row gap-0 lgl:gap-5">
              <div>
                <p className="text-sm tracking-wide mt-3 mb-5 lgl:mb-0">
                  {post.decs}
                </p>
              </div>

              <div>
                <img src={post.src} alt="" />
              </div>
            </div>
            <button
              onClick={() => setSelectedPost(post.id)}
              className="text-blue-500 hover:underline"
            >
              Read More <MdOutlineExpandMore className="text-4xl" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
