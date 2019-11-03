const React = require('react');
const Spinner = require('react-bootstrap/Spinner.js');
const UserCard = require('./../user-profile/UserCard.jsx');
const Form = require('react-bootstrap/Form.js');
const Button = require('react-bootstrap/Button.js');

class UserProfileSettingsPageContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchingUserInfo: true,
            username: "loading...",
            fullname: "loading...",
            errorOccurred: false,
            userImgUrl: "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg",
            imgInput: "",
            nicknameInput: "",
            imgInputDescription: "Размер изображения должен быть меньше, чем 1000х1000"
        };

        this.changeImageButtonClicked = this.changeImageButtonClicked.bind(this);
        this.changeUsernameButtonClicked = this.changeUsernameButtonClicked.bind(this);
        this.handleImageInput = this.handleImageInput.bind(this);
    }

    componentDidMount() {
        fetch("api/user")
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    fetchingUserInfo: false,
                    username: data["user"]["username"],
                    fullname: data["user"]["first_name"] + " " + data["user"]["last_name"],
                    userImgUrl: (data["user"]["contact_details"]["img"] === null ? "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg" : data["user"]["contact_details"]["img"]),
                    swapRequests: data["swap_requests"]
                });
            })
            .catch(err => {
                this.setState({errorOccurred: true});
                console.log("error" + err);

            });
    }

    changeImageButtonClicked() {
        fetch("api/settings/" + this.state.username + `?property=img&value=${this.state.imgInput}`, {method: 'put'})
            .then(resp => {
                if (resp.status === 200) {
                    window.location.reload();
                }

                return resp.json();
            })
            .then(errorData => this.setState({
                imgInputDescription: <span className={"text-danger"}>Ошибка: {errorData["error_description"]}</span>
            }));

    }

    changeUsernameButtonClicked() {

    }

    handleImageInput(event) {
        this.setState({imgInput: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="justify-content-between col-12 mx-auto">
                    <div className="col-12 col-md-10 mx-auto d-flex flex-column flex-md-row justify-content-around" data-aos={"fade-down"}>
                        {
                            this.state.fetchingUserInfo ? <Spinner animation="border" size={"lg"} style={{width: '3rem',height: '3rem', marginTop: '150px'}} className={"my-auto"}/> :
                                <UserCard
                                    username={this.state.username}
                                    fullname={this.state.fullname}
                                    userImgUrl={this.state.userImgUrl}
                                />
                        }
                        <div className={"settings"}>
                            <Form>
                                <Form.Group controlId="formBasicUrl">
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control type="url" placeholder="paste link here"
                                                  onChange={this.handleImageInput}/>
                                    <Form.Text className="text-muted">
                                        {this.state.imgInputDescription}
                                    </Form.Text>
                                    <button className={"btn btn-primary"} type="button"
                                            onClick={this.changeImageButtonClicked}>
                                        Сменить аватар
                                    </button>
                                </Form.Group>

                                <Form.Group controlId="formBasicText">
                                    <Form.Label>New nickname</Form.Label>
                                    <Form.Control type="password" placeholder="Пока не работает :("/>
                                </Form.Group>
                                <Button variant="primary" type="button">
                                    Сменить никнейм
                                </Button>
                            </Form>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

module.exports = UserProfileSettingsPageContent;