const heading = React.createElement
    ("h1",
    {"id":"head1", "datanode": "node1"},
    "Hello Namaste from React!"
    );

const parent = [React.createElement(
    "div", {id:"parent"}, React.createElement("div", {id:"child"}, 
    [React.createElement("h1", {id:"h1"}, "I am H1 tag."), React.createElement("h2", {id:"h3"}, "I am H2 tag.")])
), React.createElement(
    "div", {id:"parent2"}, React.createElement("div", {id:"child2"}, 
    [React.createElement("h1", {id:"h2"}, "I am H1 tag."), React.createElement("h2", {id:"h4"}, "I am H2 tag.")])
)];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
console.log(heading);