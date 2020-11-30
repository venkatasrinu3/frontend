import React from "react"
import "./App.css"
const App = () => {
  return(
    <React.Fragment>
      <div className="container">
        <div className=" main"><br/>
          <div className="bg-warning px-3 ml-4 mt-2 tag">PRO</div>
          <div className="rounded-pill img">
            <img src="/SriVatsava.jpeg" alt="Sri Vatsava" className="photo rounded-pill"/>
          </div>
          <h5 className="text-center mt-3"> <b>Nistala Sri Vatsava</b> </h5>
          <h5 className="text-center">New York</h5>
          <h5 className="text-center">User interface designer and <br/>front-end developer</h5>
          <div className="row mt-5">
            <div className="btn btn-success col-4 ml-5">Message</div>
            <div className="btn btn-outline-success col-4 ml-5">Following</div>
          </div>
          <div className="foot h-25"><br/>
            <div>
              <p className="ml-3">skills</p>
              <div className="row">
                <div className="col-2 border ml-4 border-secondary">UI/UX</div>
                <div className="col-6 border ml-2 border-secondary">Front End Development</div>
                <div className="col-2 border ml-2 border-secondary">HTML</div>
              </div>
              <div className="row">
                <div className="col-2 border ml-4 mt-2 border-secondary">CSS</div>
                <div className="col-3 border ml-2 mt-2 border-secondary">JavaScript</div>
                <div className="col-2 border ml-2 mt-2 border-secondary">React</div>
                <div className="col-2 border ml-2 mt-2 border-secondary">Node</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default App;