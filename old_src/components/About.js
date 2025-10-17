import React, {Component} from "react";
import {Icon} from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import java from "@iconify/icons-logos/src/java";
import oracle from "@iconify/icons-logos/src/oracle";
import mysql from "@iconify/icons-logos/src/mysql";
import javascript from "@iconify/icons-logos/src/javascript";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {saveAs} from "file-saver";
import hibernate from "@iconify/icons-logos/src/hibernate";
import spring from "@iconify/icons-logos/src/spring";
import postgresql from "@iconify/icons-logos/src/postgresql";
import docker from "@iconify/icons-logos/src/docker";
import dockerIcon from "@iconify/icons-logos/src/docker-icon";

class About extends Component {
    render() {
        const saveFile = () => {
            saveAs(
                "/Resume.pdf",
                "Oguzhan Bilgin - Resume.pdf"
            );
        };

        if (this.props.sharedBasicInfo) {
            var profilepic = "images/" + this.props.sharedBasicInfo.image;
        }
        if (this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.about;
            var hello = this.props.resumeBasicInfo.description_header;
            var info = this.props.resumeBasicInfo.contact_header;
            var about = this.props.resumeBasicInfo.description;
            var about0 = this.props.resumeBasicInfo.description0;
            var about1 = this.props.resumeBasicInfo.description1;
            var about2 = this.props.resumeBasicInfo.description2;
            var about3 = this.props.resumeBasicInfo.description3;
            var contact = this.props.resumeBasicInfo.contact;
        }

        return (
            <section id="about">
                <div className="col-md-12">
                    <h1 style={{color: "black"}}>
                        <span>{sectionName}</span>
                    </h1>
                    <div className="row center mx-auto mb-5">
                        <div className="col-md-4 mb-5 center">
                            <div className="polaroid">
                                <span style={{cursor: "auto"}}>
                                  <img
                                      height="350px"
                                      src={profilepic}
                                      alt="Avatar placeholder"
                                  />
                                  <Icon
                                      icon={java}
                                      style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                                  />
                                  <Icon
                                      icon={spring}
                                      style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                                  />
                                  <Icon
                                      icon={hibernate}
                                      style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                                  />
                                  <Icon
                                      icon={javascript}
                                      style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                                  />
                                  <Icon
                                      icon={dockerIcon}
                                      style={{fontSize: "350%", margin: "9% 5% 0 5%"}}
                                  />
                                  <Icon
                                      icon={oracle}
                                      style={{fontSize: "70%", margin: "9% 5% 0 5%"}}
                                  />
                                  <Icon
                                      icon={postgresql}
                                      style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                                  />
                                  <Icon
                                      icon={mysql}
                                      style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                                  />
                                    {/*<button style={{marginTop: "20px", width: "100%"}} className={"btn-secondary btn-lg"}*/}
                                    {/*        onClick={saveFile}>Portfolio Download</button>*/}
                                </span>
                            </div>
                        </div>
                        <div className="col-md-8 center">
                            <div className="col-md-10">
                                <div className="card">
                                    <div className="card-header">
                                        <span
                                            className="iconify"
                                            data-icon="emojione:red-circle"
                                            data-inline="false"
                                        ></span>{" "}
                                        &nbsp;{" "}
                                        <span
                                            className="iconify"
                                            data-icon="twemoji:yellow-circle"
                                            data-inline="false"
                                        ></span>{" "}
                                        &nbsp;{" "}
                                        <span
                                            className="iconify"
                                            data-icon="twemoji:green-circle"
                                            data-inline="false"
                                        ></span>
                                    </div>
                                    <div className="card-body font-trebuchet text-justify ml-3 mr-3"
                                        style={{
                                            height: "auto",
                                            fontSize: "132%",
                                            lineHeight: "200%",
                                        }} >
                                        <br/>
                                        <span className="wave">{hello} </span>
                                        <br/>
                                        <br/>
                                        {about} <br/> <br/>
                                        {about0} <br/> <br/>
                                        {about1} <br/>
                                        {about2} <br/>
                                        {about3} <br/> <br/>
                                        <span className="wave">{info} </span>
                                        <a style={{color: 'darkblue', fontSize: '120%'}} href={"mailto:oguzhanbilgin@outlook.com"}>{contact}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
