import React , {useState} from 'react';
import ProgressBar from './ProgressBar';


const Upload = () => {

const [file,setFile] = useState(null);
const [error,setError] = useState(null);

const types =['image/png','image/jpeg'];

const changehandler = (event) => {
let selected = event.target.files[0];

if (selected && types.includes(selected.type)) {
setFile(selected);
setError('');
}else {
setError('please select An Image(png or jpeg)');
}

}


return(
<>
<form>
<label>
<input type="file"  onChange={changehandler}/>
<span>+</span>
</label>
<div className="output">
{error && <div className="error"> {error}</div>}
{file && <div> {file.name} </div> }
{file &&  <ProgressBar file = {file} setFile ={setFile} />} 

</div>
</form>

</>

);
}

export default Upload;
