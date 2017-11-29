import * as React from "react";
import Panel from "./Panel";

const About = () => (
  <div className="container">
    <div className="row">
      <main className="col-md-12">
        <Panel heading={`Who are the Southwest Jaguars?`}>
          <div>
            <p>
              Southwest Lacrosse is a men's high school lacrosse team in the
              Plainfield/Oswego Illinois area. The club was formed to develop
              the sport of lacrosse at the high school level and managed by an
              independent board of parents and coaches who volunteer their time.
            </p>
            <p>
              All high school aged boys are eligible to play on our club team.
              Our local team is led by former high school and college players to
              help develop a competitive local program. Southwest participates
              in clinics, skill camps and leagues sponsored by New Wave
              Lacrosse. New Wave Lacrosse (<a href="www.newwavelax.com">
                www.newwavelax.com
              </a>) also runs youth development leagues, Plainfield Park
              District and Oswego Park District programs. Youth development is
              critical to our program, we encourage you to get kids involved in
              one of the local programs!
            </p>
            <p>
              The goal of our club is to develop this program into an IHSA
              sanctioned team. Currently, IHSA does not sanction lacrosse as a
              varsity sport in Illinois. We will operate as a consolidated club
              team between Plainfield, Oswego and surrounding areas until the
              local school districts and IHSA sanction lacrosse in Illinois. We
              strive to provide a safe and productive environment that enables
              young athletes to learn and apply the principles of teamwork,
              discipline, dedication, and sportsmanship.
            </p>
            <p>
              Southwest Lacrosse is a self-funded consolidated team of young men
              from the Plainfield/Oswego area. We are sustained by the efforts
              of volunteers who display an extraordinary amount of commitment
              and hard work, ensuring that our team is a positive influence in
              the lives of our children. We also strive to provide a service to
              our community by providing a healthy outlet for children and
              opportunities for the community to unite.
            </p>
            <p>
              We appreciate the generous support of the community and local
              merchants. Please email
              <a href="mailto:southwestlax@hotmail.com">
                southwestlax@hotmail.com
              </a>{" "}
              to find out more about our club or how to get involved with
              Southwest Lacrosse! We have many volunteer opportunities and any
              scholarships or donations are always appreciated!
            </p>
            <blockquote className="blockquote-reverse">
              {" "}
              Sportsmanship - Teamwork - Strength - Character - Discipline -
              Dedication{" "}
            </blockquote>
          </div>
        </Panel>
      </main>
    </div>
  </div>
);

export default About;
