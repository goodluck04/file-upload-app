// if you want work with DOM
// in react we use useRef to work with virtual DOM(same as Js DOM)

// useState store the file 

import { useRef, useState, useEffect } from 'react';
import './App.css';
import { uploadFile } from './services/api.js'


function App() {

  // store file
  const [file, setFile] = useState('') // initial empty
  const [result, setResult] = useState('') // storing linkpath

  // declare useRef to use DOM manipulation
  const fileInputRef = useRef();

  const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

  // useEffect to make an API call
  // ittakes two arguments 1) a callback function and 2) depandancy array
  useEffect(() => {
    const getImage = async () => {
      // we only want tocall the api if there is file
      if(file) {
        // make formData()
        const data = new FormData();
        // ony send name and the file
        data.append("name", file.name)
        data.append("file", file)

        // api call which we made services folder
        // sending data in uploadFile api
        let response = await uploadFile(data);
        setResult(response.path) // url link in the form of path
        // we getting url from the response from fileUpload
        // to store the the link we need maintain state and store the link
        

      }
    }
    getImage();
  }, [file])
  //open when we opload the file
  
  
  const onUploadClick = () => {
    // .current is object of virtualDOM and click() property
    fileInputRef.current.click();
  }

  console.log(file)
  
  return (
    <div className='container'>
      {/* left  */}
        <img src={logo} alt="banner" />
      <div className='wrapper'>
        <h1>Simple File Sharing!</h1>
        <p>Upload and share the download link</p>
        {/* onClick use property and onUploadClick is function */}
        <button onClick={() => onUploadClick()}>Upload</button>
        {/* we want use input functionality on upload button */}
        <input type='file' 
          ref={fileInputRef} // refering to input behaviour
          // do not need input tag show hide it using css ->display:none 
          style={{display:'none'}}
          // e stands for event in case data e.target.values but in files we use e.target.files
          // files[0] for just one file
          onChange={(e) => setFile(e.target.files[0])}
        />

          {/* // use <a></a> to show url link */}
        <a href={result} target="_blank" rel="noreferrer">{result}</a>

      </div>

    </div>
    
    
  );
}

export default App;
