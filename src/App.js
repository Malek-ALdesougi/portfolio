import { useState } from 'react';
import './App.css';



// create a function to call it to create the component 

// check if the current component has children property and its  !== null 

//call the function to create the new button of the object 

// else we will print the title name as a text and stop the call of the function


const files = [
  {
  title: "node_modules",
  children: [
    {
      title: "lodash",
      children: [{ title: "Map" }, { title: "isEmpty" }],
    },

    {
      title: "MUI",
      children: [
        { title: "Button" },
        { title: "Table", children: [{ title: "Cell", children: [{ title: "Cell1" }, { title: "Cell2" }] }, { title: "Row" }] },
      ],
    },
  ],
}
]


const ParentComponent = ({ data }) => {

  const [visability, setVisability] = useState({});



  const changeVisiaility = (folder) => {
    setVisability({...visability , [folder] : !visability[folder]});
  }

  console.log(visability);

  return (
    <div>
        {data && data?.map((item) => {
          return (
            <div key={item.title}>
            <button style={{backgroundColor: !item.children ? 'gray' : ''}} className='btn' onClick={() => changeVisiaility(item.title)}>{item?.title}</button>
             <div style={{ display: !visability[item.title] && "none" }}>
              {item?.children !== [] &&  <ParentComponent data={item.children}/>}
             </div>
            </div>
          )
        })}
      </div>
    )
}



function App() {

  return (
    <div className="App">
      <ParentComponent data={files} />
    </div>
  );
}

export default App;
