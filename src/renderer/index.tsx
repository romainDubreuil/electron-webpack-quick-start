import React from "react";
import ReactDOM  from "react-dom";

const Root: React.FC = () => (
    <div>
        <h1>Welcome</h1>
        <p>some text</p>
    </div>
)

ReactDOM.render(
    <Root />,
    document.getElementById('app')
)