import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
       {/* Sidebar */}
       <div className="wrapper">

        <span>Tomas Dev</span>
        <div className="social">
            <a href="https://www.linkedin.com/in/tomas-arizu-47ba1521a/"><img src="/linkedin.png" alt="" /></a>
            <a href="https://github.com/tomasArizu13"><img src="/github.png" alt="" /></a>
            <a href="https://www.instagram.com/tomasarizu/"><img src="/instagram.png" alt="" /></a>
            <a href="https://pdfsimpli.com/es/userdocument/view-b?ofn=CV%20Arizu%20Tomas.pdf&unqn=CVArizuTomas_ee2d319ccdb64e859972c4beb7475d98.pdf&frm=pdf&to=DOC&fskb=221&npdf=CVArizuTomas_ee2d319ccdb64e859972c4beb7475d98.pdf"><img src="/Cv.png" alt="" /></a>
        </div>
       </div>
    </div>
  )
}

export default Navbar