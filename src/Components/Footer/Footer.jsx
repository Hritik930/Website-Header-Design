import './Footer.css'

const Footer = () => {
  return (
    <div>
       <footer className="py-3 my-4">
    <ul className="nav justify-content-center pb-3 mb-3 yuk">
      <li className="nav-item footer"><a href="#" className="nav-link px-2 ">Home</a></li>
      <li className="nav-item footer"><a href="#" className="nav-link px-2 ">Features</a></li>
      <li className="nav-item footer"><a href="#" className="nav-link px-2 ">Pricing</a></li>
      <li className="nav-item footer"><a href="#" className="nav-link px-2 ">FAQs</a></li>
      <li className="nav-item footer"><a href="#" className="nav-link px-2 ">About</a></li>
    </ul>
    <p className="text-center footer">© 2023 Company, Inc</p>
  </footer>
    </div>
  )
}

export default Footer
