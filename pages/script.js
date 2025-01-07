const App = React.createClass({ displayName: "App",

  render() {
    let data = [
    {
      title: "سطح رول پلی سرور؟ .",
      content: `در سرور ما تلاش شده سطح رول پلی به واقعیت نزدیک باشه لزا نیاز هست هر پلیر تلاش زیادی برای انجام دادن ارپی خود به بهترین نحو باشه و با کسانی که قوانین رو نقض کنن برخود جدی میشود.`},
    {
      title: "Two",
      content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.`},
    {
          title: "Two",
          content: `Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt 
                      ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit 
                      in voluptate velit esse cillum dolore 
                      eu fugiat nulla pariatur. Excepteur 
                      sint occaecat cupidatat non proident, 
                      sunt in culpa qui officia deserunt 
                      mollit anim id est laborum.` },      
    {
      title: "Two",
      content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.` },      
                  
    {
      title: "Three",
      content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.` }];
                  



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