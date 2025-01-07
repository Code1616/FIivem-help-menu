const App = React.createClass({ displayName: "App",

  render() {
    let data = [
    {
      title: "کدوم شغل ها بیشترین درآمد رو دارن ؟ .",
      content: `تمامی شغل ها از درآمد خوبی برخوردار هستند ولی شغل های مدیک و تاکسی و راننده کامیون از درآمد بهتری برخور هستن.` },
    {
      title: "هر چند دقیقه حقوق ها واریز میشه ؟ .",
      content: `در هر 15 دقیقه.` },
    {
          title: "چقدر طول میکشه یه ماشین خوب بخرم ؟ .",
          content: ` تقریبا بین 10 تا 20 روز.` },      
    {
      title: "پول کثیف در سرور داریم ؟ .",
      content: `بله پول کثیف در سرور وجود داره.` },      
            
      {
     title: "پول کثیف چه استفاده هایی داره؟ .",
     content: `از پول کثیف برای خرید اسلحه  و برای خرید بعضی از آیتم ها در بلک مارکت استفاده میشود.` },      
         
     
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