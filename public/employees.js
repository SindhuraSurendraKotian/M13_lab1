let sally = 'Sally Smith';
let mark = 'Mark Martin';
let holly = 'Holly Unlikely';
let sindhu = 'Sindhura Surendra Kotian';
let abhi = 'Abhishek Bidaraguppe';
const ul = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'red',
    'fontSize': '28px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, sindhu), /*#__PURE__*/React.createElement("li", null, abhi));
ReactDOM.render(ul, document.getElementById('content'));