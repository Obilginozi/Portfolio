import React, {Component} from "react";
import $ from "jquery";
import "../App.scss";
import MusicAbout from "../components/MusicAbout";
import MusicFooter from "../components/MusicFooter";
import MusicHeader from "../components/MusicHeader";
import MusicPlatforms from "../components/MusicPlatforms";

class AtletikBezelyeHome extends Component {

    constructor(props) {
        super();
        this.state = {
            foo: "bar", resumeData: {}, sharedData: {},
        };
    }

    applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
        this.swapCurrentlyActiveLanguage(oppositeLangIconId);
        document.documentElement.lang = pickedLanguage;
        var resumePath = document.documentElement.lang === window.$primaryLanguage ? `atletik_bezelye_primaryLanguage.json` : `atletik_bezelye_secondaryLanguage.json`;
        this.loadResumeFromPath(resumePath);
    }

    swapCurrentlyActiveLanguage(oppositeLangIconId) {
        var pickedLangIconId = oppositeLangIconId === window.$primaryLanguageIconId ? window.$secondaryLanguageIconId : window.$primaryLanguageIconId;
        document
            .getElementById(oppositeLangIconId)
            .removeAttribute("filter", "brightness(40%)");
        document
            .getElementById(pickedLangIconId)
            .setAttribute("filter", "brightness(40%)");
    }

    componentDidMount() {
        this.loadSharedData();
        this.applyPickedLanguage(window.$primaryLanguage, window.$secondaryLanguageIconId);
    }

    loadResumeFromPath(path) {
        $.ajax({
            url: path, dataType: "json", cache: false, success: function (data) {
                this.setState({resumeData: data});
            }.bind(this), error: function (xhr, status, err) {
                alert(err);
            },
        });
    }

    loadSharedData() {
        $.ajax({
            url: `atletik_bezelye_shared_data.json`, dataType: "json", cache: false, success: function (data) {
                this.setState({sharedData: data});
                document.title = `${this.state.sharedData.basic_info.name}`;
            }.bind(this), error: function (xhr, status, err) {
                alert(err);
            },
        });
    }

    render() {
        return (<div>
            <MusicHeader
                sharedData={this.state.sharedData.basic_info}
                banner="/images/AtletikBezelyeBanner.jpeg"/>
            <MusicPlatforms sharedBasicInfo={this.state.sharedData.basic_info}/>
            <MusicAbout
                resumeBasicInfo={this.state.resumeData.basic_info}
                sharedBasicInfo={this.state.sharedData.basic_info}/>
            <MusicFooter sharedBasicInfo={this.state.sharedData.basic_info}/>
        </div>);
    }
}

export default AtletikBezelyeHome;
