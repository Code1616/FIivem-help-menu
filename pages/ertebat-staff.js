const App = React.createClass({ displayName: "App",

  render() {
    let data = [
    {
      title: "ارتباط با تیم استف چطوریه ؟ .",
      content: `ارتباط با تیم اسف به دو صورت انجام میشه 
      1 : با ریپورت دادن در داخل سرور که با کامند " " انجام میشود.
      2 : با ورود به دیسکورد و باز کردن تیکت یا جوین شدن به ویس ارتباط با ادمین انجام میشود.` },
    {
      title: "میشه عضو تیم استف شد ؟ .",
      content: `بله در صورت علاقه مند بودت به عضویت در تیم استف میتوانید با ورود به دیسکورد و باز کردن تیکت یا جوین شدن به ویس ارتباط با ادمین مراجعه کنید.` },
             
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