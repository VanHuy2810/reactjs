import "./styles/index.scss";

function CV() {
  return (
    <>
      <div className="resume">
        <div className="resume_left">
          <div className="resume_profile">
            <img src="https://i.redd.it/48ncc4ubo8r91.jpg" alt="profile_pic" />
          </div>
          <div className="resume_content">
            <div className="resume_item resume_info">
              <div className="title">
                <p className="bold">Văn Huy</p>
                <p className="regular">Designer</p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fas fa-map-signs" />
                  </div>
                  <div className="data">Liên Chiểu, Đà Nẵng</div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-mobile-alt" />
                  </div>
                  <div className="data">0797265007</div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="data">huytv2810@gmail.com</div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-weebly" />
                  </div>
                  <div className="data">www.kekeke.com</div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_skills">
              <div className="title">
                <p className="bold">skills</p>
              </div>
              <ul>
                <li>
                  <div className="skill_name">HTML</div>
                  <div className="skill_progress">
                    <span style={{ width: "80%" }} />
                  </div>
                  <div className="skill_per">80%</div>
                </li>
                <li>
                  <div className="skill_name">CSS</div>
                  <div className="skill_progress">
                    <span style={{ width: "70%" }} />
                  </div>
                  <div className="skill_per">70%</div>
                </li>
                <li>
                  <div className="skill_name">SASS</div>
                  <div className="skill_progress">
                    <span style={{ width: "90%" }} />
                  </div>
                  <div className="skill_per">90%</div>
                </li>
                <li>
                  <div className="skill_name">JS</div>
                  <div className="skill_progress">
                    <span style={{ width: "60%" }} />
                  </div>
                  <div className="skill_per">60%</div>
                </li>
                <li>
                  <div className="skill_name">JQUERY</div>
                  <div className="skill_progress">
                    <span style={{ width: "88%" }} />
                  </div>
                  <div className="skill_per">88%</div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_social">
              <div className="title">
                <p className="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fab fa-facebook-square" />
                  </div>
                  <div className="data">
                    <p className="semi-bold">Facebook</p>
                    <p>vanhuy2810@facebook</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-twitter-square" />
                  </div>
                  <div className="data">
                    <p className="semi-bold">Twitter</p>
                    <p>vanhuy2810@twitter</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-youtube" />
                  </div>
                  <div className="data">
                    <p className="semi-bold">Youtube</p>
                    <p>vanhuy2810@youtube</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-linkedin" />
                  </div>
                  <div className="data">
                    <p className="semi-bold">Linkedin</p>
                    <p>vanhuy2810@linkedin</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resume_right">
          <div className="resume_item resume_about">
            <div className="title">
              <p className="bold">About us</p>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis illo fugit officiis distinctio culpa officia totam
              atque exercitationem inventore repudiandae?
            </p>
          </div>
          <div className="resume_item resume_work">
            <div className="title">
              <p className="bold">Work Experience</p>
            </div>
            <ul>
              <li>
                <div className="date">2013 - 2015</div>
                <div className="info">
                  <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, voluptatibus!
                  </p>
                </div>
              </li>
              <li>
                <div className="date">2015 - 2017</div>
                <div className="info">
                  <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, voluptatibus!
                  </p>
                </div>
              </li>
              <li>
                <div className="date">2017 - Present</div>
                <div className="info">
                  <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, voluptatibus!
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_education">
            <div className="title">
              <p className="bold">Education</p>
            </div>
            <ul>
              <li>
                <div className="date">2010 - 2013</div>
                <div className="info">
                  <p className="semi-bold">Web Designing (Texas University)</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, voluptatibus!
                  </p>
                </div>
              </li>
              <li>
                <div className="date">2000 - 2010</div>
                <div className="info">
                  <p className="semi-bold">Texas International School</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, voluptatibus!
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_hobby">
            <div className="title">
              <p className="bold">Hobby</p>
            </div>
            <ul>
              <li>
                <i className="fas fa-book" />
              </li>
              <li>
                <i className="fas fa-gamepad" />
              </li>
              <li>
                <i className="fas fa-music" />
              </li>
              <li>
                <i className="fab fa-pagelines" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CV;
