const App = React.createClass({ displayName: "App",

  render() {
    let data = [
    {
      title: "چند نوع ماشین تو سرور داریم ؟ .",
      content: `سه نوع ماشین (کار شاپی -  VIP - اختصاصی).` },
    {
      title: "از کجا ماشین بخرم ؟ .",
      content: `شما میتوانید ماشین های کار شاپی را اد دو شاپ که بر روی نقشه مشخص شده خریداری کنید.
      شما برای خرید ماشین های " VIP "و" اختصاصی " باید با تیم استف ارتباط برقرار کنید.` },
    {
          title: "قوانین گنگ یا خانواده ها چیه ؟ .",
          content: ` از جمله قوانینی که میشه بهش اشاره کرد سرچ نکردن ارگان های نظامی میباشد و برای اطلاعات بیشتر به قسمت قوانین دیسکورد مراجعه کنید.` },      
    {
      title: "دزدیدن ماشین ها چطوریه ؟ .",
      content: `شما برای دزدیدن ماشین ها به ایتم " LOCK PICK" نیاز دارید که این ایتم در مارکت وجود دارد.` },      
             
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