import React, {Component} from "react";
import $ from "jquery";
import "./App.scss";
import Selection from "./components/Selection";
import DevHome from "./pages/DevHome";
import IvyMontgomeryHome from "./pages/IvyMontgomeryHome";
import AtletikBezelyeHome from "./pages/AtletikBezelyeHome";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink, Redirect
} from "react-router-dom";

class App extends Component {

    constructor(props) {
        super();
        this.state = {
            foo: "bar",
            resumeData: {},
            sharedData: {},
        };
    }

    // applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    //     this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    //     document.documentElement.lang = pickedLanguage;
    //     var resumePath =
    //         document.documentElement.lang === window.$primaryLanguage
    //             ? `res_primaryLanguage.json`
    //             : `res_secondaryLanguage.json`;
    //     this.loadResumeFromPath(resumePath);
    // }

    // swapCurrentlyActiveLanguage(oppositeLangIconId) {
    //     var pickedLangIconId =
    //         oppositeLangIconId === window.$primaryLanguageIconId
    //             ? window.$secondaryLanguageIconId
    //             : window.$primaryLanguageIconId;
    //     document
    //         .getElementById(oppositeLangIconId)
    //         .removeAttribute("filter", "brightness(40%)");
    //     document
    //         .getElementById(pickedLangIconId)
    //         .setAttribute("filter", "brightness(40%)");
    // }

    componentDidMount() {
        this.loadSharedData();
        // this.applyPickedLanguage(
        //     window.$primaryLanguage,
        //     window.$secondaryLanguageIconId
        // );
    }

    // loadResumeFromPath(path) {
    //     $.ajax({
    //         url: path,
    //         dataType: "json",
    //         cache: false,
    //         success: function (data) {
    //             this.setState({resumeData: data});
    //         }.bind(this),
    //         error: function (xhr, status, err) {
    //             alert(err);
    //         },
    //     });
    // }

    loadSharedData() {
        $.ajax({
            url: `portfolio_shared_data.json`,
            dataType: "json",
            cache: false,
            success: function (data) {
                this.setState({sharedData: data});
                document.title = `${this.state.sharedData.basic_info.name}`;
            }.bind(this),
            error: function (xhr, status, err) {
                alert(err);
            },
        });
    }

    render() {
        return (
            <div>
                <Router>
                    <Link to="/">

                    </Link>
                    <Link to="/Developer">

                    </Link>
                    {/*<Link to="/IvyMontgomery">*/}

                    {/*</Link>*/}
                    {/*<Link to="/AtletikBezelye">*/}

                    {/*</Link>*/}

                    <Switch>
                        <Selection exact path="/" component={Selection} sharedData={this.state.sharedData.basic_info}/>
                        <DevHome exact path="/Developer" component={DevHome}/>
                        <IvyMontgomeryHome exact path="/IvyMontgomery" component={IvyMontgomeryHome}/>
                        <AtletikBezelyeHome exact path="/AtletikBezelye" component={AtletikBezelyeHome}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
