let sally='Sally Smith'
let mark='Mark Martin'
let holly='Holly Unlikely'
let sindhu='Sindhura Surendra Kotian'
let abhi = 'Abhishek Bidaraguppe'
    const ul =  (
        <ul style={{'color':'red', 'fontSize': '28px'}}>
            <li>{sally}</li>
            <li>{mark}</li>
            <li>{holly}</li>
            <li>{sindhu}</li>
            <li>{abhi}</li>
        </ul>
    )
    ReactDOM.render(ul,document.getElementById('content'))