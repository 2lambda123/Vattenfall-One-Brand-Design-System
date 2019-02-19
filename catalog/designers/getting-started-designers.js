
import React from "react";

const Designers = () => (
  <div style= {{ 
    margin:'10px 20px 0 40px',
    width: '70%'}}>
    <link href="/dist/css/reboot.css" rel="stylesheet" type="text/css" />
    <link href="/dist/css/main.css" rel="stylesheet" type="text/css" />
    <link href="/dist/css/documentation.css" rel="stylesheet" type="text/css" />

    <div style={{
      background: 'transparent'
    }}>
      <h2>Get started / Designers</h2>
        <p style={{ fontSize: '18px' }}>
        In order to get started with Vattenfall Digital Design System, make sure you have been provided with both apps: Abstract and Sketch. Abstract is a version control tool, which keeps all of your Sketch working files in one place. It also prevents creating conflicting copies and allows contributors to request reviews and inspect the files without opening Sketch.
        </p>

        <div className="vf-row">
          <div className="vf-col">
        <a className="vf-link-with-arrow vf-link-with-arrow--small" href="https://www.goabstract.com/how-it-works/" target="_blank" rel="noopener" data-mce-href="https://www.goabstract.com/how-it-works/">Get Abstract</a>
          </div>
          <div className="vf-col">
        </div>
      </div> 

        <div className="vf-row">
          <div className="vf-col">
        <a className="vf-link-with-arrow vf-link-with-arrow--small" href="https://sketchapp.com/docs/the-interface/" target="_blank" rel="noopener" data-mce-href="https://sketchapp.com/docs/the-interface/">Sketch Introduction</a>
           </div>
          <div className="vf-col">
        </div>
      </div>

      <div className="vf-row">
        <div className="vf-col">
      <a className="vf-link-with-arrow vf-link-with-arrow--small" href="https://www.goabstract.com/blog/making-sketch-collaboration-better-with-abstract/" target="_blank" rel="noopener" data-mce-href="https://www.goabstract.com/blog/making-sketch-collaboration-better-with-abstract/">Sketch + Abstract collaboration</a>
        </div>
        <div className="vf-col">
      </div>
    </div> 

      <h4 style={{marginTop: '40px'}}>Vattenfall Design Kit</h4>
        <p style={{ fontSize: '18px' }}>
        The Vattenfall Design Kit (VDK) is a living library that contains Vattenfall's digital visual assets for everyday purpose: modules, components, icons, color palettes, grids, typography, etc. The purpose of VDK is to ensure design and development consistency across entire Vattenfall ecosystem, improve quality & efficiency in production, bring digital products & services to next level of coherency. The VDK can be accessed via Abstract in Sketch format and connected to your working design documents as a Sketch Library source.
        </p>
       
        <div className="vf-row">
          <div className="vf-col">
        <a className="vf-link-with-arrow vf-link-with-arrow--small" href="https://www.goabstract.com/how-it-works/" target="_blank" rel="noopener" data-mce-href="https://www.goabstract.com/how-it-works/">Vattenfall Design Kit on Abstract</a>
          </div>
        <div className="vf-col">
      </div>
    </div> 

    <div className="vf-row">
          <div className="vf-col">
        <a className="vf-link-with-arrow vf-link-with-arrow--small" href="https://sketchapp.com/docs/the-interface/" target="_blank" rel="noopener" data-mce-href="https://sketchapp.com/docs/the-interface/" data-mce-selected="1">Vattenfall Design Kit on Github</a>
        </div>
        <div className="vf-col">
      </div>
    </div> 
  

      <h4 style={{marginTop: '40px'}}>Design Kit Structure</h4>
        <p style={{ fontSize: '18px' }}>
        Have a look at the Design Kit structure here. It is a nested library of symbols for all everyday design needs. It is grouped by a type of module or component with different aspects depending on the use case of such.
        </p>

      <p style={{ fontSize: '18px' }}>
      The library of Design Kit contains more that 500 ready-to-use design snippets: from simple buttons to more complex modules. Make sure to study the component library as well and use components with correct naming.
      We use a simplified version of the Atomic Design methodology, which we have adapted to suit our design process and our team culture. The main difference with Atomic Design is that all modules are either an atom or a molecule, categorised by purpose. Our approach to defining modules and naming them is function-directed, rather than presentational. It is based on evolving a shared design language collaboratively and empowering all designers and engineers on the team to contribute to the system.
      </p>

   
       <img className="is-content" src="https://clients.alchemy.se/vattenfall/wp-content/uploads/2018/12/structure-1.png" width="70%" alt="structure" caption="" data-width="original" data-scaling="no"></img></div>
     
       <br></br> 
        </div> 
  
)
export default Designers;