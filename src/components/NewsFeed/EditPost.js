// import {useEffect, useState} from "react";
// import {Navigate, useParams} from "react-router-dom";
// import Editor from "./Editor";
// import "./NewsFeed.css";

// export default function EditPost() {
//   const {id} = useParams();
//   const [title,setTitle] = useState('');
//   const [summary,setSummary] = useState('');
//   const [content,setContent] = useState('');
//   const [files, setFiles] = useState('');
//   const [redirect,setRedirect] = useState(false);

//   useEffect(() => {
//     fetch('http://localhost:7000/newsfeed/post/' + id)
//     // fetch('https://cdp-kappa.vercel.app/newsfeed/post/'+id)
//       .then(response => {
//         response.json().then(postInfo => {
//           setTitle(postInfo.title);
//           setContent(postInfo.content);
//           setSummary(postInfo.summary);
//         });
//       });
//   }, [id]);

//   async function updatePost(ev) {
//     ev.preventDefault();
//     const data = new FormData();
//     data.set('title', title);
//     data.set('summary', summary);
//     data.set('content', content);
//     data.set('id', id);
//     if (files?.[0]) {
//       data.set('file', files?.[0]);
//     }
//     // const response = await fetch('https://cdp-kappa.vercel.app/newsfeed/post', { 
//     const response = await fetch(`http://localhost:7000/newsfeed/post/${id}`, {
//       method: 'PUT',
//       body: data,
//       credentials: 'include',
//     }); 
//     if (response.ok) {
//       setRedirect(true);
//       console.log("Karraha hai");
//     }
//     else {
//       console.log("nahi kr rha hyy") ;
//     }
//   }

//   if (redirect) {
//     return <Navigate to={'/newsfeed/post/'+id} />
//   }

//   return (
//     <form onSubmit={updatePost}>
//       <input type="title"
//              placeholder={'Title'}
//              value={title}
//              onChange={ev => setTitle(ev.target.value)} />
//       <input type="summary"
//              placeholder={'Summary'}
//              value={summary}
//              onChange={ev => setSummary(ev.target.value)} />
//       <input type="file"
//              onChange={ev => setFiles(ev.target.files)} />
//       <Editor onChange={setContent} value={content} />
//       <button style={{marginTop:'5px'}}>Update post</button>
//     </form>
//   );
// }


// EditPost.js
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "./Editor";
import "./NewsFeed.css";

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState(null); // New state for cover image
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // fetch("http://localhost:7000/newsfeed/post/" + id)
    fetch("https://cdp-kappa.vercel.app/newsfeed/post/" + id)
      .then((response) => {
        response.json().then((postInfo) => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      });
  }, [id]);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (cover) {
      data.set("cover", cover); // Append cover image to FormData
    }

    try {
      // const response = await fetch(`http://localhost:7000/newsfeed/post/${id}`, {
        const response = await fetch(`https://cdp-kappa.vercel.app/newsfeed/post/${id}`, {
        method: "PUT",
        body: data,
        credentials: "include",
      });

      if (response.ok) {
        setRedirect(true);
        console.log("Karraha hai");
      } else {
        console.log("nahi kr rha hyy");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  }

  if (redirect) {
    return <Navigate to={"/newsfeed/post/" + id} />;
  }

  return (
    <form onSubmit={updatePost}>
      <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="summary"
        placeholder={"Summary"}
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input
        type="file"
        onChange={(ev) => setCover(ev.target.files[0])} // Handle cover image change
      />
      <Editor onChange={setContent} value={content} />
      <button style={{ marginTop: "5px" }}>Update post</button>
    </form>
  );
}
