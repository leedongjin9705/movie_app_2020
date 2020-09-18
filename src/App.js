import React from 'react';

function Food({fav}) {
    return (
        <h3>I love {fav}</h3>
    );
}
function App() {
return (
 
 <div>
    <h1>Hello</h1>
    <Food fav="햄버거"/>
    <Food fav="콜라"/>
    <Food fav="치즈볼"/>
    <Food fav="칼국수"/>
    <Food fav="등촌"/>
</div>
 );
}

export default App;  