import React from "react";
import "../css/Work.css";
import { experience } from "./constants";
import { Timeline } from "rsuite";

function Work() {
  return (
    <div className="work-section">
      <h1>EXPERIENCE</h1>
      <div className="clubs">
        {experience.map((company) => (
          <div className="club">
            <div class="card shadow">
              <img alt="club" className="work-img" src={company.image} />
              <h1>{company.name}</h1>
            </div>
            <ClubTimeline work={company.work} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ClubTimeline({ work }) {
  return (
    <div className="club-timeline">
      <Timeline align="left">
        {work.map((job) => (
          <Timeline.Item className="one-job">
            <p className="job-text">{job.details}</p>
            <p className="job-text job-date">{job.date}</p>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}

export default Work;
