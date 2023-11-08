import React from 'react';
import parse from 'html-react-parser';

const VidEmbed = () => {
    const embedHtml = `
   <iframe width="560" height="315" src="https://www.youtube.com/embed/amHJcPzig-M?si=Y-yBCIKgFkx42dK5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

    return (
        <div>
            {parse(embedHtml)}
        </div>
    );
};

export default VidEmbed;






