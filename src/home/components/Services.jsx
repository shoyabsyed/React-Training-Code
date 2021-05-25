import React from 'react'
import services from '../../data/services'
import { Counter } from './CounterView'



function Services() {
    return <div className="main-services">
        <div className="container">
            <h2 className="service-title">MAIN SERVICES</h2>
            <div className="title-seperator"></div>
            <div className="services">
            {services.map((singleService, idx) => <SingleService image={singleService.image} title={singleService.title} description={singleService.description} />)}
                {/* {services.map((singleService, idx) => <SingleService {...singleService} />)} */}
            </div>


            {/* <div className="services">
        <div className="single-service">
          <img src="https://livedemo00.template-help.com/wt_58900/images/index-2.jpg" alt="" />
          <h3>WEDDING <br/>CAKES</h3>
          <p>Whether you are looking for a traditional style or a contemporary creation, our decorators can meet your individual needs.</p>
        </div>
        <div className="single-service">
          <img src="https://livedemo00.template-help.com/wt_58900/images/index-3.jpg" alt="" />
          <h3>OUR <br/>BREADS</h3>
          <p>The unique flavors and textures of our breads come from the use of natural starters, minimal commercial yeast, and a slow fermentation process.</p>
        </div>
        <div className="single-service">
          <img src="https://livedemo00.template-help.com/wt_58900/images/index-4.jpg" alt="" />
          <h3>BEST <br/>COOKIES</h3>
          <p>Is there really anything more satisfying than a great cookie? We don't think so and when you try ours we think you'll agree.</p>
        </div>
        <div className="single-service">
          <img src="https://livedemo00.template-help.com/wt_58900/images/index-5.jpg" alt="" />
          <h3>TARTS <br/>AND PIES</h3>
          <p>Everyone loves the elegance of a tart or pie. We offer bite-sized tartlettes for a quick sweet treat or large dramatic tarts and pies.</p>
        </div>
      </div> */}
        </div>
    </div>
}

export function SingleService({image, title, description}){ //the argument which passed in the Props is an object --- Props DESTRUCTIONING
    return  <div className="single-service">
    <img src={image} alt="" />
    <h3 dangerouslySetInnerHTML={{__html: title.split(" ").join("<br />")}}></h3>
    <p>{description}</p>
</div>
}


// export function SingleService(props){  //the argument which passed in the Props is an object
//     return  <div className="single-service">
//     <img src={props.image} alt="" />
//     <h3 dangerouslySetInnerHTML={{__html: props.title.split(" ").join("<br />")}}></h3>
//     <p>{props.description}</p>
// </div>
// }

export default Services
// import Services from "./"
