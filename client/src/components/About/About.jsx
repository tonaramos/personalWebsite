import React from 'react';
import Segment from '../../hoc/Segment/Segment';

function About() {
  return (
    <Segment>
      <div className="about">
        <h1>
          About Me
        </h1>
        <p>
          {'I am a software engineer, who values diversity, equality, and is close to his family and loves nature. I built this website to show those ideas. Initially interested in Mechanical Engineering, I decided to transition to software Engineering inspired by the agility of the work, the quick turn out, and the possibility of helping many from their own devices. Growing up in the California Central Valley and Mexico, I was lucky to be part of two cultures I respect and love.  Silicon Valley has opened my eyes to the vast possibilities this country and the world has to offer as well as communities facing challenges around the world that we can help. Currently, in San Francisco, I am lucky to be in a place where I have met people and from all over the world. If you want to learn more about my work as a software engineer check out my resume, projects, and other links on this page. '}
        </p>
        <h2>
        What’s a Tōna
        </h2>
        <p>
          {'Tonatiuh was one of my given names at birth. In Aztec mythology, Tonatiuh was the fifth sun and the leader of the skies. You have probably seen his image at the center of the Aztec calendar.'}
        </p>
      </div>
    </Segment>
  );
}

export default About;
