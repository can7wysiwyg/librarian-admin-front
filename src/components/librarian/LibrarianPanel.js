

function LibrarianPanel() {
    return(<>
    
    <section className="py-6 bg-light-primary">
    <div className="container">
        <div className="row justify-content-center text-center mb-4">
            <div className="col-xl-6 col-lg-8 col-sm-10">
                <h2 className="font-weight-bold">Welcome!</h2>
                <p className="text-muted mb-0">select what to do from the below menu items</p>
            </div>
        </div>

        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 text-center justify-content-center px-xl-6 aos-init aos-animate" data-aos="fade-up">



        <div className="col my-3">
                <div className="card border-hover-primary hover-scale">
                    <div className="card-body">
                        <div className="text-primary mb-5">

    <svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
    
    <circle cx="50" cy="20" r="10" fill="#78909C" />
    <path d="M50,30 Q45,40 50,50 Q55,40 50,30" fill="#78909C"/>
    <path d="M50,50 L50,70" stroke="#78909C" stroke-width="2"/>
    <line x1="50" y1="70" x2="40" y2="90" stroke="#78909C" stroke-width="2"/>
    <line x1="50" y1="70" x2="60" y2="90" stroke="#78909C" stroke-width="2"/>
    <line x1="50" y1="50" x2="35" y2="60" stroke="#78909C" stroke-width="2"/>
    <line x1="50" y1="50" x2="65" y2="60" stroke="#78909C" stroke-width="2"/>

    
    <circle cx="150" cy="20" r="10" fill="#FFAB91" />
    <path d="M150,30 Q145,40 150,50 Q155,40 150,30" fill="#FFAB91"/>
    <path d="M150,50 L150,70" stroke="#FFAB91" stroke-width="2"/>
    <line x1="150" y1="70" x2="140" y2="90" stroke="#FFAB91" stroke-width="2"/>
    <line x1="150" y1="70" x2="160" y2="90" stroke="#FFAB91" stroke-width="2"/>
    <line x1="150" y1="50" x2="135" y2="60" stroke="#FFAB91" stroke-width="2"/>
    <line x1="150" y1="50" x2="165" y2="60" stroke="#FFAB91" stroke-width="2"/>
</svg>


                        

                           
                        </div>
                        <h6 className="font-weight-bold mb-3">USERS</h6>
                        <p className="text-muted mb-0"><a href="/users">see users (manage users)</a></p>
                    </div>
                </div>
            </div>
            {/* user bar end */}


            <div className="col my-3">
    <div className="card border-hover-primary hover-scale">
        <div className="card-body">
            <div className="text-primary mb-5">
                <svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                    
                    <rect x="20" y="30" width="60" height="40" fill="#FFCDD2" />
                    <rect x="20" y="70" width="60" height="5" fill="#D32F2F" />
                    
                    <rect x="90" y="20" width="60" height="40" fill="#C8E6C9" />
                    <rect x="90" y="60" width="60" height="5" fill="#388E3C" />
                    
                    <rect x="160" y="40" width="60" height="40" fill="#BBDEFB" />
                    <rect x="160" y="80" width="60" height="5" fill="#1976D2" />
                </svg>
            </div>
            <h6 className="font-weight-bold mb-3">BOOKS</h6>
            <p className="text-muted mb-0"><a href="/books_panel">add books, view books (manage books)</a></p>
        </div>
    </div>
</div>
{/* book item ends */}


<div className="col my-3">
    <div className="card border-hover-primary hover-scale">
        <div className="card-body">
            <div className="text-primary mb-5">
                <svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                    
                    <path d="M10 10 L40 10 L45 20 L40 30 L10 30 Z" fill="#FFCDD2"/>
                    <text x="15" y="25" font-size="10" fill="#000">Cat 1</text>

                    
                    <path d="M50 20 L80 20 L85 30 L80 40 L50 40 Z" fill="#C8E6C9"/>
                    <text x="55" y="35" font-size="10" fill="#000">Cat 2</text>

                    
                    <path d="M90 10 L120 10 L125 20 L120 30 L90 30 Z" fill="#BBDEFB"/>
                    <text x="95" y="25" font-size="10" fill="#000">Cat 3</text>

                    
                    <path d="M130 20 L160 20 L165 30 L160 40 L130 40 Z" fill="#FFAB91"/>
                    <text x="135" y="35" font-size="10" fill="#000">Cat 4</text>
                </svg>
            </div>
            <h6 className="font-weight-bold mb-3">CATEGORIES</h6>
            <p className="text-muted mb-0"><a href="/categories_panel">View and Manage Categories</a></p>
        </div>
    </div>
</div>
{/* categories item ends here */}





{/* never here */}
</div>

        </div>



      </section>
    
    
    </>)
}

export default LibrarianPanel