import React, {Component} from "react";

type ProjectProps = {
    title: string;
    client: string;
    description: string;
    linkURL1: string | undefined;
    linkText1: string | undefined;
    linkURL2: string | undefined;
    linkText2: string | undefined;
    image1x: string | undefined;
    image2x: string | undefined;
    imageAltText: string | undefined;
}

function Project({title, client, description, linkURL1, linkText1, linkURL2, linkText2, image2x, imageAltText}: ProjectProps){

  return(

      <div className="jb-portfolio__item jb-portfolio__item_left">
        <div className="jb-portfolio__item__text">
          <h3>{title}</h3>
          <h4>{client}</h4>
          <p>{description}</p>
          <a href={linkURL1} className="jb-button">{linkText1}</a>
          {(linkURL2 && linkText2) ? <a href={linkURL2} className="jb-button">{linkText2}</a> : ""}
        </div>
        <div className="jb-portfolio__item__image">
          <img src={image2x} alt={imageAltText} loading="lazy"/>
        </div>
      </div>


  );
}

export default Project;
