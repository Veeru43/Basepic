import React ,{useState} from 'react';
import './App.css';
import Title from './compos/Title';
import Upload from './compos/Upload';
import ImageGrid from './compos/ImageGrid';
import Modal from './compos/Modal';

function App() {

const [selectedImg,setSelectedImg] = useState(null);

  return (
    <div className="App">
    <Title />
   <Upload />
   <ImageGrid setSelectedImg={setSelectedImg} />
 {selectedImg &&  <Modal selectedImg={selectedImg}  setSelectedImg={setSelectedImg} /> }
    </div>
  );
}

export default App;
