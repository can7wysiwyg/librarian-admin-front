import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"
import { motion } from 'framer-motion';
import axios from "axios";

function ManageCategories() {
   const state =  useContext(GlobalState)
   const[genres] = state.genresApi.genres
   




   const categoryVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  if(genres.length === 0) {
    return(<>
    
    <h1 className="text-center">no book genres as of yet</h1>
    </>)
  }

    return(<motion.div>
    <ul className="list-group">
          {genres?.map((category, index) => (
            <motion.li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center mb-2"
            variants={categoryVariants}
          >
            <ShowGenres category={category} />
            
          </motion.li>
            
          ))}
        </ul>

    
    
    </motion.div>)
}

const ShowGenres = ({category}) => {
    const state =  useContext(GlobalState)
    const[books] = state.booksApi.books
    const token = state.token
    const [checkedCat, setChecked] = useState({})


    useEffect(() => {

if(category._id) {
    books.forEach((book) => {
        if(book.bookGenre === category._id) setChecked(book)
    })
}


    }, [category._id, books])


 const deleteCategory = async(event) => {
    event.preventDefault()

    const res = await axios.delete(`/genre/delete_genre/${category._id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    alert(res.data.msg)
    window.location.href = "/manage_categories"
 }


    return(<>
    
    {category.genreName}
  
  
   { checkedCat.bookGenre === category._id ? <p>HAS BOOKS </p>  :  <button
              className="btn btn-danger"

              onClick={deleteCategory}
             
            >
              Delete
            </button>   }
    
    
    
    </>)
}

export default ManageCategories