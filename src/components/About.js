import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import technologies from "../technologies"

const About = () =>
{
  const [show, setShow] = useState(true)
  const location = useLocation()
  useEffect(() =>
  {
    if (location.pathname === "/")
    {
      setShow(false)
    }
  }, [location.pathname])
  //console.log(show, location)
  return <>
    <section className="text-secondary my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h2>Project Details</h2>
            <p>In this assignment, I tried to build a dummy amazon clone.<br /> Well, I know that it looks like nonprofessional<br /></p>
            <p>I used Fake Store data. I got data from there and used it with JSON-Server. <br /> Why did I do this? <br /> I just wanted to try JSON-Server and its API that Fake Store API doesn't have.</p>
            <p>You can see all products, search specific product and display each product details.</p>
          </div>
          <div className="col-md-5 drop-cap-text">
            <h2>Technologies That I Used</h2>
            <div className="list-group">
              {technologies.map(data =>
                // eslint-disable-next-line react/jsx-no-target-blank
                <a href={data.url} key={data.id} target="_blank" rel="noopener   noreferrer" className="list-group-item list-group-item-action list-group-item-light">
                  {data.title}
                </a>)
              }
            </div>
          </div>
        </div>
      </div>
    </section>

    {show && <div className="container">
      <div className="text-center ">
        <img src="profile.jpg" className="rounded-circle" style={{ width: "20vh" }} alt="Profile" />
        <h3>About Merve</h3>
        <p>Merve is a self-taught developer, and she works as a front-end developer in a company. After she graduated from food engineering, she found her passion in coding. She is one of the women of 25 who graduated from Women Developer Academy Turkey 2021. She is also a Women Techmakers Ambassador.

          <br /> Fun facts about her, she can center a div without "google it" sometimes, well she said "sometimes". Also, she likes to watch anime, learn new things, challenge herself.</p>
      </div>
    </div>}
  </>
}
export default About