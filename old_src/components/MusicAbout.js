import React, {Component} from "react";

class MusicAbout extends Component {
    constructor(props) {
        super(props);
        this.background = props.banner;
    }
    render() {
        if (this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.about;
            var hello = this.props.resumeBasicInfo.description_header;
            var info = this.props.resumeBasicInfo.contact_header;
            var about = this.props.resumeBasicInfo.description;
            var about0 = this.props.resumeBasicInfo.description0;
            var about1 = this.props.resumeBasicInfo.description1;
            var about2 = this.props.resumeBasicInfo.description2;
            var contact = this.props.resumeBasicInfo.contact;
        }

        return (
            <section id="about">
                <div className="col-md-12" style={{
                    height: window.innerHeight,
                    backgroundImage: `url(${process.env.PUBLIC_URL + this.background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat'
                }}>
                    <h1 style={{color: "black"}}>
                        <span>{sectionName}</span>
                    </h1>
                    <div className="row center mx-auto mb-5">
                        <div className="col-md-12 center">
                            <div className="col-md-10">
                                <div className="card">
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
                                        <span>{info} </span>
                                        <a href={"mailto:oguzhanbilgin@outlook.com"}>{contact}</a>
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

export default MusicAbout;
