import {useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import Editor from "./Editor";

export default function EditPost() {
  const {id} = useParams();
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect,setRedirect] = useState(false);

  useEffect(() => {
    // fetch('http://localhost:7000/newsfeed/post/'+id)
    fetch('https://backend-fast-nu-career-development-portal-tais.vercel.app/newsfeed/post/'+id)
      .then(response => {
        response.json().then(postInfo => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      });
  }, [id]);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);
    if (files?.[0]) {
      data.set('file', files?.[0]);
    }
    console.log("kr rha hyy in update")
    // const response = await fetch('http://localhost:7000/newsfeed/post', {
      const response = await fetch('https://backend-fast-nu-career-development-portal-tais.vercel.app/newsfeed/post', { 
    method: 'PUT',
      body: data,
      credentials: 'include',
    });
    console.log("kr rha hyy") 
    if (response.ok) {
      setRedirect(true);
    }
    else {
      console.log("nahi kr rha hyy") 
    }
  }

  if (redirect) {
    return <Navigate to={'/newsfeed/post/'+id} />
  }

  return (
    <form onSubmit={updatePost}>
      <input type="title"
             placeholder={'Title'}
             value={title}
             onChange={ev => setTitle(ev.target.value)} />
      <input type="summary"
             placeholder={'Summary'}
             value={summary}
             onChange={ev => setSummary(ev.target.value)} />
      <input type="file"
             onChange={ev => setFiles(ev.target.files)} />
      <Editor onChange={setContent} value={content} />
      <button style={{marginTop:'5px'}}>Update post</button>
    </form>
  );
}