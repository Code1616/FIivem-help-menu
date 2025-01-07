const App = React.createClass({ displayName: "App",

  render() {
    let data = [
    {
      title: "چند نوع شغل داریم ؟ .",
      content: `شغل ها به دو دسته تقسیم میشن :
      1: شغل های دولتی(مدیک - پلیس - مکانیک - اف بی ای – تاکسی )
      2: شغل های آزاد( مغازه دار- مواد فروش – ماینری – شکارچی – راننده کامیون – اسلحه فروش – نمایشگاه ماشین – هتل دار و غیره .
      برخی از شغل های آزاد در فهرست کار های غیر قانونی قرار میگیرد.` },
    {
      title: "عضو شدن تو شغل ها چطوریه ؟ .",
      content: `برای شغل های دولتی باید به همان ارگان مراجعه کنید و تست های لازمه رو با موفقیت انجام بدهید.
      برای عضویت توی شغل های آزاد به محل های درج شده روی نقشه مراجعه کنید.` },
    {
          title: "چطوری مغازه بخرم ؟ .",
          content: `برای خرید مغازه شما باید سرمایه کافی داشته باشید تا بتوانید آنجا را به مالکیت خود در بیاورید.` },      
    {
      title: "شغل های ساید منفی سرور کدام شغل ها هستن ؟ .",
      content: `تمام شغل هایی که قوانین ارگان های دولتی را زیر پا بگذارد و باعث هرج و مرج در شهر بشود در ساید شغل های منفی قرار میگیرد مثل: مواد فروشی – اسلحه فروشی – بلک مارکت و غیره.` },      
                  
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