import { galleryArrayList, listAll } from "./Firebase";

const listGallery = () =>{
  listAll("photos/");
  galleryArrayList.map((item) => {
    console.log("item: " +item);
  })
}

function App() {  
  return (
    <div className="App">
      helo
      <button onClick={listGallery}>list</button>
    </div>
  );
}
export default App;
