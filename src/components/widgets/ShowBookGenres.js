import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGenres } from "../../redux/actions/genreAction"
import { motion } from 'framer-motion';
import { BooksShow } from "../../redux/actions/bookAction";

function ShowBookGenres() {

    const dispatch = useDispatch()

    const genres = useSelector((state) => state.genreRdcr.genres)

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
    

    useEffect(() => {

        const fetchData = async() => {


            try {

                await dispatch(getGenres())
                
            } catch (error) {
                console.error("there was a problem")
            }


        }

        fetchData()


    }, [dispatch])


    if(!genres || genres === undefined || genres === null) {

        return(<>

        <h6 className="text-center" style={{marginTop: "2rem"}}>book genres are loading</h6>
        
        
        </>)
    }  if(genres && genres.length === 0) {

        return(<>

        <h6 className="text-center" style={{marginTop: "2rem"}}>there are no book genres at the momemnt; please <a href="/create_genre">create some</a> </h6>
        
        
        </>)
    }


    return(<>
    <motion.div >
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

    
    
    </motion.div>
    
    
    
    </>)


}


const ShowGenres = ({category}) => {
    const [checkedCat, setChecked] = useState({})
 const books = useSelector((state) => state.bookRdcr.books)
 const dispatch = useDispatch()


useEffect(() => {

    const fetchData = async() => {
 
        try {

            await dispatch(BooksShow())

            if(books && books.bookGenre) {

                if(category._id) {
                    books.forEach((book) => {
                        if(book.bookGenre === category._id) setChecked(book)
                    })
                }
                




            }
            
        } catch (error) {
            console.error(error)
        }

    }

    fetchData()


}, [dispatch, books, category._id])


const deleteCategory = async(event) => {
    event.preventDefault()


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

export default ShowBookGenres