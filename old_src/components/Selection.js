import React, {Component} from "react";
import {Link} from "react-router-dom";
// const DevOnClick = event => {
//     event.stopPropagation();
//     this.props.history.push('/Developer');
// };
// const DrumOnClick = event => {
//     event.stopPropagation();
//     this.props.history.push('/Drummer');
// };

class Selection extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick() {
        this.history.push('/Developer');
    }

    render() {
        if (this.props.sharedData) {
            let width = window.innerWidth;
            var Home;
            var message;
            if (width < 760) {
                Home = "images/" + this.props.sharedData.imageAa;
                message = "Hello mobile user. Please visit my site on desktop with big screen. Because I coded front-end even though I am actually back-end developer.";
            } else if (width < 820){
                Home = "images/" + this.props.sharedData.imageAa;
                message = "Hello tablet user. Please visit my site on desktop with big screen. Because I coded front-end even though I am actually back-end developer.";
            } else {
                Home = "images/" + this.props.sharedData.imageA;
            }

            // var Developer = "images/" + this.props.sharedData.imageA;
            // var Drummer = "images/" + this.props.sharedData.imageB;
        }
        return (
            <selection id="selection" style={{height: window.innerHeight}}>
                <div className="contain">
                    <div className="content">
                        <div className="content-overlay"></div>
                        <img className="content-image" src={Home} alt={""}/>
                        <div className="content-details fadeIn-left">
                            <p style = {{marginBottom : 300}}>{message}</p>
                            <p>Please click for reCAPTCHA</p>
                            <Link to="/Developer">
                                <p>I'm not a robot</p>
                            </Link>
                        </div>

                    </div>
                    {/*<div className="content">*/}
                    {/*    <Link to="/Developer">*/}
                    {/*        <div className="content-overlay"></div>*/}
                    {/*        <img className="content-image" src={Developer} alt={""}/>*/}
                    {/*        <div className="content-details fadeIn-left">*/}
                    {/*            <h3>Developer</h3>*/}
                    {/*            <p>Without errors for now</p>*/}
                    {/*        </div>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    {/*<div className="content">*/}
                    {/*    <Link to="/Drummer">*/}
                    {/*        <div className="content-overlay"></div>*/}
                    {/*        <img className="content-image" src={Drummer} alt={""}/>*/}
                    {/*        <div className="content-details fadeIn-right">*/}
                    {/*            <h3>Drummer</h3>*/}
                    {/*            <p>The rhythms I drummed</p>*/}
                    {/*        </div>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </div>
            </selection>
        )
    }
}

export default Selection;