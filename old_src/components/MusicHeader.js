import React, {Component} from "react";

class MusicHeader extends Component {
    titles = [];

    constructor(props) {
        super(props);
        this.state = {checked: false};
        this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
        this.background = props.banner;
    }

    onThemeSwitchChange(checked) {
        this.setState({checked});
        this.setTheme();
    }

    setTheme() {
        var dataThemeAttribute = "data-theme";
        var body = document.body;
        var newTheme = body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
        body.setAttribute(dataThemeAttribute, newTheme);
    }

    render() {
        return (
            <header id="home"
                    style={{
                        height: window.innerHeight,
                        display: 'block',
                        backgroundImage: `url(${process.env.PUBLIC_URL + this.background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                <div
                    className="language"
                    style={{
                        position: "absolute",
                        bottom: "20px",
                        right: "20px",
                        zIndex: 1000, // diğer içeriklerin üstünde olsun
                        display: "flex",
                        gap: "10px"
                    }}
                >
                    <div
                        onClick={() =>
                            this.applyPickedLanguage(
                                window.$primaryLanguage,
                                window.$secondaryLanguageIconId
                            )
                        }
                        style={{cursor: "pointer"}}
                    >
    <span
        className="iconify language-icon"
        data-icon="twemoji-flag-for-flag-united-kingdom"
        data-inline="false"
        id={window.$primaryLanguageIconId}
    ></span>
                    </div>
                    <div
                        onClick={() =>
                            this.applyPickedLanguage(
                                window.$secondaryLanguage,
                                window.$primaryLanguageIconId
                            )
                        }
                        style={{cursor: "pointer"}}
                    >
    <span
        className="iconify language-icon"
        data-icon="twemoji-flag-for-flag-turkey"
        data-inline="false"
        id={window.$secondaryLanguageIconId}
    ></span>
                    </div>
                </div>
            </header>
        );
    }
}

export default MusicHeader;
