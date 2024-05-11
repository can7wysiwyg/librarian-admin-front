function AdminPanel() {
    return(<>
    <section className="py-6 bg-light-primary">
    <div className="container">
        <div className="row justify-content-center text-center mb-4">
            <div className="col-xl-6 col-lg-8 col-sm-10">
                <h2 className="font-weight-bold">Welcome! To The Main Adminstration Panel</h2>
                <p className="text-muted mb-0">select what to do from the below menu items</p>
            </div>
        </div>


        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 text-center justify-content-center px-xl-6 aos-init aos-animate" data-aos="fade-up">
{/* start make librarian */}

<div className="col my-3">
    <div className="card border-hover-primary hover-scale">
        <div className="card-body">
            <div className="text-primary mb-5">
                <svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                    
                    <path fill="#FFFFFF" d="M50 30c-5.5 0-10 4.5-10 10v10h20v-10c0-5.5-4.5-10-10-10z" />
                    <rect x="40" y="40" width="20" height="5" fill="#FFFFFF" />
                    <path fill="#FFFFFF" d="M30 45h40v5H30z" />
                    <path fill="#FFFFFF" d="M20 50h60v5H20z" />
                    <path fill="#FFFFFF" d="M15 55h70v5H15z" />

                    
                    <path fill="#FFAB91" d="M150 30c-5.5 0-10 4.5-10 10v10h20v-10c0-5.5-4.5-10-10-10z" />
                    <rect x="140" y="40" width="20" height="5" fill="#FFAB91" />
                    <path fill="#FFAB91" d="M130 45h40v5h-40z" />
                    <path fill="#FFAB91" d="M120 50h60v5h-60z" />
                    <path fill="#FFAB91" d="M115 55h70v5h-70z" />

                    
                </svg>




            </div>
            <h6 className="font-weight-bold mb-3">MAKE LIBRARIAN</h6>
            <p className="text-muted mb-0"><a href="/create_librarian">create librarian</a></p>
        </div>
    </div>
</div>





{/* end make librarian */}



{/* see librarian */}

<div className="col my-3">
    <div className="card border-hover-primary hover-scale">
        <div className="card-body">
            <div className="text-primary mb-5">
                <svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                    
                    <ellipse cx="50" cy="50" rx="30" ry="15" fill="none" stroke="#78909C" stroke-width="2"/>
                    <circle cx="50" cy="50" r="5" fill="#78909C" />
                    
                    <circle cx="46" cy="46" r="2" fill="#FFFFFF" />

                    
                    <ellipse cx="150" cy="50" rx="30" ry="15" fill="none" stroke="#FFAB91" stroke-width="2"/>
                    <circle cx="150" cy="50" r="5" fill="#FFAB91" />
                    
                    <circle cx="146" cy="46" r="2" fill="#FFFFFF" />
                </svg>
            </div>
            <h6 className="font-weight-bold mb-3">VIEW ADMIN</h6>
            <p className="text-muted mb-0"><a href="/librarian_info">see librarian</a></p>
        </div>
    </div>
</div>





{/* end see librarian */}



{/* manage librarian */}

<div className="col my-3">
    <div className="card border-hover-primary hover-scale">
        <div className="card-body">
            <div className="text-primary mb-5">
                <svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                    
                    <path fill="#78909C" d="M45 30l-5 5 20 20 5-5-10-10 10-10z" />
                    <rect x="50" y="30" width="20" height="5" fill="#78909C" transform="rotate(45 50 30)" />
                    <path fill="#78909C" d="M75 30l5 5-5 5-5-5z" />

                    
                    <path fill="#FFAB91" d="M145 30l-5 5 20 20 5-5-10-10 10-10z" />
                    <rect x="150" y="30" width="20" height="5" fill="#FFAB91" transform="rotate(45 150 30)" />
                    <path fill="#FFAB91" d="M175 30l5 5-5 5-5-5z" />
                </svg>
            </div>
            <h6 className="font-weight-bold mb-3">MANAGE LIBRARIAN</h6>
            <p className="text-muted mb-0"><a href="/manage_librarian">manage librarian</a></p>
        </div>
    </div>
</div>




{/* end manage librarian */}

</div>





        </div>
        </section>

    
    </>)
}

export default AdminPanel