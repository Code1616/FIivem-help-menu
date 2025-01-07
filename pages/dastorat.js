const App = React.createClass({ displayName: "App",

  render() {
    let data = [
    {
      title: "کلید های کاربردی کدوم هستن ؟ .",
      content: `[F1]: Phone
      [F2]: Inventory Menu
      [F3]: Emote Menu
      [F5]: Radio
      [F6]: Job Menu
      [F7]: Billing Menu
      [F10]: Scoreboard
      [F12]: Steam screen shot
      [Home]: cloth managing
      [T]: Chat
      [U]: Lock/Unlock car
      [K]: Toggle key binding
      [~]: Hands Up/Down
      [LCtrl]: Sit Down/Up
      [B]: Finger` },
      
    ];
                  



    return /*#__PURE__*/(
      React.createElement(Accordion, { data: data }));

  } });


const Accordion = React.createClass({ displayName: "Accordion",

  componentWillMount() {
    let accordion = [];

    this.props.data.forEach(i => {
      accordion.push({
        title: i.title,
        content: i.content,
        open: false });

    });

    this.setState({
      accordionItems: accordion });

  },

  click(i) {
    const newAccordion = this.state.accordionItems.slice();
    const index = newAccordion.indexOf(i);

    newAccordion[index].open = !newAccordion[index].open;
    this.setState({ accordionItems: newAccordion });
  },

  render() {
    const sections = this.state.accordionItems.map((i) => /*#__PURE__*/
    React.createElement("div", { key: this.state.accordionItems.indexOf(i) }, /*#__PURE__*/
    React.createElement("div", {
      className: "title",
      onClick: this.click.bind(null, i) }, /*#__PURE__*/

    React.createElement("div", { className: "arrow-wrapper" }, /*#__PURE__*/
    React.createElement("i", { className: i.open ?
      "fa fa-angle-down fa-rotate-180" :
      "fa fa-angle-down" })), /*#__PURE__*/


    React.createElement("span", { className: "title-text" },
    i.title)), /*#__PURE__*/


    React.createElement("div", { className: i.open ?
      "content content-open" :
      "content" }, /*#__PURE__*/

    React.createElement("div", { className: i.open ?
      "content-text content-text-open" :
      "content-text" }, " ",
    i.content))));





    return /*#__PURE__*/(
      React.createElement("div", { className: "accordion" },
      sections));


  } });


ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById('accordion'));