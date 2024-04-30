export const logoutAdmin = () => {
    localStorage.removeItem("supertoken")
    localStorage.removeItem("librarianToken")


    
    window.location.href="/"
}