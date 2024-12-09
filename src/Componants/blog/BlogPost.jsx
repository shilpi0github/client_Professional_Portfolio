// src/components/BlogPost.jsx
import { IoMdArrowRoundBack } from "react-icons/io";
const BlogPost = ({ post, onBack }) => {
  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button onClick={onBack} className="text-blue-500 hover:underline mb-4"><IoMdArrowRoundBack /> Back </button>
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose">
       
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
