import React, {Component} from "react";
import $ from "jquery";
import "../App.scss";
import MusicHeader from "../components/MusicHeader";
import MusicPlatforms from "../components/MusicPlatforms";
import MusicAbout from "../components/MusicAbout";
import MusicFooter from "../components/MusicFooter";

class IvyMontgomeryHome extends Component {

    constructor(props) {
        super();
        this.state = {
            foo: "bar", resumeData: {}, sharedData: {},
        };
    }

    applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
        this.swapCurrentlyActiveLanguage(oppositeLangIconId);
        document.documentElement.lang = pickedLanguage;
        var resumePath =
            document.documentElement.lang === window.$primaryLanguage
                ? `ivy_montgomery_primaryLanguage.json`
                : `ivy_montgomery_secondaryLanguage.json`;
        this.loadResumeFromPath(resumePath);
    }

    swapCurrentlyActiveLanguage(oppositeLangIconId) {
        var pickedLangIconId =
            oppositeLangIconId === window.$primaryLanguageIconId
                ? window.$secondaryLanguageIconId
                : window.$primaryLanguageIconId;
        document
            .getElementById(oppositeLangIconId)
            .removeAttribute("filter", "brightness(40%)");
        document
            .getElementById(pickedLangIconId)
            .setAttribute("filter", "brightness(40%)");
    }

    componentDidMount() {
        this.loadSharedData();
        this.applyPickedLanguage(
            window.$primaryLanguage,
            window.$secondaryLanguageIconId
        );
    }

    loadResumeFromPath(path) {
        $.ajax({
            url: path,
            dataType: "json",
            cache: false,
            success: function (data) {
                this.setState({resumeData: data});
            }.bind(this),
            error: function (xhr, status, err) {
                alert(err);
            },
        });
    }

    loadSharedData() {
        $.ajax({
            url: `ivy_montgomery_shared_data.json`,
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
        return (<div>
            <MusicHeader
                sharedData={this.state.sharedData.basic_info}
                banner="/images/IvyMontgomeryBanner.jpg"/>
            <MusicPlatforms
                sharedBasicInfo={this.state.sharedData.basic_info}
                banner="/images/IvyMontgomertBack.png"/>
            <MusicAbout
                resumeBasicInfo={this.state.resumeData.basic_info}
                sharedBasicInfo={this.state.sharedData.basic_info}
                banner="/images/IvyMontgomertBack.png"/>
            <MusicFooter sharedBasicInfo={this.state.sharedData.basic_info}/>
        </div>);
    }
}

export default IvyMontgomeryHome;
