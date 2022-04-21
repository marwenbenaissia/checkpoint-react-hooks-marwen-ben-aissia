import {useState} from 'react';
import MovieList from './MovieCard'
import './MovieCard.css'
import { Button ,Modal,Form,Navbar,Container,FormControl} from 'react-bootstrap';
import './MovieList.css';
function Movie ({movie}){
  return(  
    
  <div className="movie-item2">
    <div className="mi2-in th-vf">
        <div className="mi2-img">
          <img className="img" src={movie.posterURL} alt="Avengers: Endgame"/> 
          <div className="mi2-title">{movie.title}</div>
           <span className="mi2-version">{movie.description}</span>
            <span className="mi2-rating">
              <i id="Maticon_star" className="material-icons-star">★</i>
              {movie.rating}
             </span>
         </div>
     </div>
  </div>
   )
}
const  AfficheMovie =()=> {
const [movies,setMovies]=useState([
    
  {
    title:"Avengers Grimm", 
    description:"Action", 
    posterURL:"https://www.cpasfini.me/uploads/posts/2022-01/1641199959_29295491b71a6f65dbe7268a3d2e711f5e0002e8.jpg",
     rating:"2",
  },
  {
    title:"Matrix Resurrections", 
    description:"fection", 
    posterURL:"https://www.cpasfini.me/uploads/posts/covers/ebdfbcc917ee47bea176baf406b4e99b.jpg",
     rating:"4",
  },
  {
    title:"les Éternels", 
    description:"fection", 
    posterURL:"https://www.cpasfini.me/uploads/posts/2022-01/1641988313_5wnpjdg.jpg",
     rating:"1",
  },{
    title:"Avengers Grimm", 
    description:"Action", 
    posterURL:"https://www.cpasfini.me/uploads/posts/2022-01/1641199959_29295491b71a6f65dbe7268a3d2e711f5e0002e8.jpg",
     rating:"1",
  },
  {
    title:"Matrix Resurrections", 
    description:"fection", 
    posterURL:"https://www.cpasfini.me/uploads/posts/covers/ebdfbcc917ee47bea176baf406b4e99b.jpg",
     rating:"4",
  },
  {
    title:"les Éternels", 
    description:"fection", 
    posterURL:"https://www.cpasfini.me/uploads/posts/2022-01/1641988313_5wnpjdg.jpg",
     rating:"1",
  },{
    title:"Avengers Grimm", 
    description:"Action", 
    posterURL:"https://www.cpasfini.me/uploads/posts/2022-01/1641199959_29295491b71a6f65dbe7268a3d2e711f5e0002e8.jpg",
     rating:"5",
  },
  {
    title:"Matrix Resurrections", 
    description:"fection", 
    posterURL:"https://www.cpasfini.me/uploads/posts/covers/ebdfbcc917ee47bea176baf406b4e99b.jpg",
     rating:"5",
  },
  {
    title:"les Éternels", 
    description:"fection", 
    posterURL:"https://www.cpasfini.me/uploads/posts/2022-01/1641988313_5wnpjdg.jpg",
     rating:"5",
  },])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [filterTitle, setSersch] = useState("");
  const [filterRating, setrateSersch] = useState("");

  const Addmovies = (title,description,posterURL,rating) => 
  {
    const newMovies=[...movies,{
      title:title, 
      description:description, 
      posterURL:posterURL,
       rating:rating, 
    }];
    setShow(false);
    setMovies(newMovies);
  }
   return (
     <>
< div className="container">
<Navbar  expand="lg" bg="dark" variant="dark">
<Container fluid>
  <Navbar.Brand href="#">Film Streaming</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
  <div className="input-group">
  <Button variant="outline-success" onClick={handleShow}>Ajouter Film</Button>
    <Modal  expand="lg" bg="dark" variant="dark"  show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <MovieList Addmovies={Addmovies}setShow={setShow} handleClose={handleClose}></MovieList>
      </Modal.Body>
     
    </Modal>

</div>
<div className="rating rating2">
    <Button variant="outline-success" onClick={()=>setrateSersch("")}>reset rate</Button>
    <a href="#5" title="Give 5 stars"onClick={()=>setrateSersch("5")}>★</a>
    <a href="#4" title="Give 4 stars"onClick={()=>setrateSersch("4")}>★</a>
    <a href="#3" title="Give 3 stars"onClick={()=>setrateSersch("3")}>★</a>
    <a href="#2" title="Give 2 stars"onClick={()=>setrateSersch("2")}>★</a>
    <a href="#1" title="Give 1 stars"onClick={()=>setrateSersch("1")}>★</a>
</div>
    <Form className="d-flex">
      <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={e=>setSersch(e.target.value.toLowerCase())}/>
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Container>
</Navbar>
</div>
    
    <div className="body-movie">

    {
    movies
    .filter((mov)=>
    mov.title.toLowerCase().trim().includes(filterTitle)&&
    (mov.rating.includes (filterRating))
         )
     .map((mov,index)=>
      ( 
        <Movie movie={mov} index={index} key={index} >{console.log(filterRating)}</Movie>     
      ))}
    </div>

    </>
  );
}
export default AfficheMovie;