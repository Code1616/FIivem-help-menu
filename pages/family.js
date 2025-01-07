const App = React.createClass({ displayName: "App",

  render() {
    let data = [
    {
      title: "چطوری گنگ یا خانواده تشکیل بدم ؟ .",
      content: `برای تشکیل گنگ یا خانواده اول نیاز به عضویت ممبر توی گنگ یا خانواده هستید لذا فقط ممبر مهم نیست سطح ارپی و ادب هم لازم میباشد و برای دریافت میتوانید به دیسکورد مراجه کرده و درخواست خودتونو ثبت کنید.` },
    {
      title: "هزینه تشکیل گنگ یا خانواده چقدره ؟ .",
      content: `هزینه تشکیل گنگ یا خانواده بسته تعداد اعضا, سطح ارپی , و.. میباشد برای اطلاعات بیشتر به دیسکورد سرور مراجعه کرده و تیکت بازکنید.` },
    {
          title: "قوانین گنگ یا خانواده ها چیه ؟ .",
          content: ` از جمله قوانینی که میشه بهش اشاره کرد سرچ نکردن ارگان های نظامی میباشد و برای اطلاعات بیشتر به قسمت قوانین دیسکورد مراجعه کنید.` },      
    {
      title: "چطوری اسلحه به دست بیاریم ؟ .",
      content: `1 با لول آپ کردن گنگ و خانواده میتوان به لولی رسید که گرفت برای گنگ باز شود 2 با خرید از بلک مارکت و معامله با افراد اون میتوان اسلحه و...بدست آورد.` },      
            
      {
     title: "درآمد گنگ یا خانواده به چه صورته ؟ .",
     content: `رای درآمد گنگ یا خانواده میتوان با لول آپ گنگ و شغل ها اشاره کرد که میشه درآمد خوبی داشته باشند.` },      
         
    {
     title: "کارتل یا مافیا در شهر وجود داره ؟ .",
     content: `سرور مافیا یا کارتل برای فروش ندارد ولی شما با فعالیت گنگ خودتون و لول آپ اون میتوانید به اون قابلیت دست پیدا کنید که بشید مافیا یا کارتل توی سرور.` },      
     
     {
         title: "چطور سطح گنگ یا خانواده خودم رو بالا ببرم ؟ .",
         content: `برای بالا بردن سطح گنگ نیاز به فعالیت و رابری دارید که با زدن رابری رفتن به کپچر جابجایی مواد و اسلحه و یا پر کردن تاییم پلی .` },      
               
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