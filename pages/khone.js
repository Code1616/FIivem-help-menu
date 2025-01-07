const App = React.createClass({ displayName: "App",

  render() {
    let data = [
    {
      title: "من از کجا خونه بخرم ؟ .",
      content: `شما میتوانید هر خونه ای که روی نقشه با علامت "خونه قرمز"هست را خریداری کنید.ولی برای شروع پیشنهاد ما به شما کرایه اتاق در هتل است.
      هتل کجاست ؟در قسمت چپ شهر هتلی وجود دارد که با علامت "H" آبی رنگ بر روی نقشه مشخص شده است.شما میتوانید با کرایه کردن اتاق در این هتل شما به کمد لباس و جایی برای نگهداری وسائل خود دسترسی پیدا میکنید.` },
    {
      title: "چند نفر همزمان میتونن یک اتاق رو تو هتل داشته باشن ؟ .",
      content: `هر اتاق میتواند فقط به مالکیت یک فرد در بیاید و هرکسی اتاق مخصوص به خودش را دارد.` },
    {
          title: "میتونم خونه یا اتاق هتل رو بفروشم ؟ .",
          content: `شما میتوانید اتاق های خود را در هتل پس بدهید و همچنین خونه های خود را با مبلغی کمتر از آنچه پرداخت کرده اید(30%) به فروش برسانید.` },      
    
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