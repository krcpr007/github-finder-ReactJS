import React from "react";
import {FaGithub} from 'react-icons/fa'
function About() {
  return (
    <>
    <div className="container-sm">

      <h1 className="text-6xl mb-2"> <FaGithub className="inline mb-2 text-slate-900" /> Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        is made by daisyUI and tailwind css 





        <strong>
          <a href="https://rajankr.pages.dev/"> Rajan kumar</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        My Github:
        <a className="text-white" href="https://github.com/krcpr007">
           Rajan kumar
        </a>
      </p>
    </div>

    </>
  );
}

export default About;