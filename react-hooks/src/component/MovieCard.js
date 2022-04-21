
import { useState } from "react";
import { Button ,Modal,Form,} from 'react-bootstrap';


const  MovieCard =({Addmovies,setShow,handleClose})=> {
 
 
  const [title,settTitleNewMovie]= useState("");
  const [description,setDescriptionNewMovie]= useState("");
  const [posterURL,setPosterURLNewMovie]= useState("");
  const [rating,setRatingNewMovie]= useState("");        
  const handlerSubmit = (e) => 
  {e.preventDefault();
    Addmovies(title,description,posterURL,rating);
    setShow(false);
  }
  const verif =(ver)=>{
    if (!ver.includes("https://"))
    {setPosterURLNewMovie("https://png.pngtree.com/background/20210710/original/pngtree-film-film-poster-background-material-picture-image_1055676.jpg");}
    else {setPosterURLNewMovie(ver);
    }
  }
return (
<>
<Form >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label >titre de film</Form.Label>                
            <Form.Control type ="text" onChange={e=>settTitleNewMovie(e.target.value)}></Form.Control>
            <Form.Label>description de film</Form.Label>
            <select className="liste"  onChange={e=>setDescriptionNewMovie(e.target.value)}>
                  <option value="Action">Action</option>
                  <option value="Drame">Drame</option>
                  <option value="Fction">Fction</option>
                  <option value="Anime">Anime</option>
            </select>
            <Form.Label>url de coverture</Form.Label>
            <Form.Control type ="text" onChange={e=>verif(e.target.value)}></Form.Control>
            <Form.Label>reating</Form.Label>
            <div className="rating rating2">
                  <a href="#5" title="Give 5 stars"onClick={()=>setRatingNewMovie("5")}>★</a>
                  <a href="#4" title="Give 4 stars"onClick={()=>setRatingNewMovie("4")}>★</a>
                  <a href="#3" title="Give 3 stars"onClick={()=>setRatingNewMovie("3")}>★</a>
                  <a href="#2" title="Give 2 stars"onClick={()=>setRatingNewMovie("2")}>★</a>
                  <a href="#1" title="Give 1 stars"onClick={()=>setRatingNewMovie("1")}>★</a>
            </div>
          </Form.Group>
        </Form>
        <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose}> Annuler </Button>
        <Button variant="outline-success" type="submit"onClick={handlerSubmit}> Add Movie </Button>
      </Modal.Footer>
    </>
)
      }
      export default MovieCard;