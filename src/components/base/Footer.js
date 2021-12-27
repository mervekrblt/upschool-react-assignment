const Footer = () => {
return <>
  <footer className="bg-dark text-center text-white">
    
    <div className="container p-4 pb-0">
      
      <section className="mb-4">
        
        <a
          className="btn btn-primary btn-floating m-1"
          style={{backgroundColor: "#55acee"}}
          href="https://twitter.com/esrikhaller"
          role="button"
        ><i className="fab fa-twitter"></i
        ></a>

        
        <a
          className="btn btn-primary btn-floating m-1"
          style={{backgroundColor: "#0082ca"}}
          href="https://www.linkedin.com/in/merve-karabulut"
          role="button"
        ><i className="fab fa-linkedin-in"></i
        ></a>
        
        <a
          className="btn btn-primary btn-floating m-1"
          style={{backgroundColor: "#333333"}}
          href="https://github.com/mervekrblt"
          role="button"
        ><i className="fab fa-github"></i
        ></a>
      </section>
      
    </div>
    

    
    <div className="text-center p-3" >
      © 2021 Copyright:
      <a className="text-white" href="https://www.linkedin.com/in/merve-karabulut">Merve Karabulut</a>
    </div>
    
  </footer>
</>
}
export default Footer