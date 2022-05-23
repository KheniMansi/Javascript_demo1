import React, {useState} from "react"
// import SecondDemo from "./SecondDemo";

function Parent(){
    // console.log(handleChange);
    const handleChange1 = (e) => {
        var txt = e.target.value;
        setText(txt);

        // onChangeInput(txt)
    }
    const [text, setText] = useState("");
    console.log(text);
    return(
        <>
        <div>
            {/* <SecondDemo /> */}
            <div>
                <input type="text" name="text1" id="text1" onChange={handleChange1} />
            </div>
            <Child dataParentToChild = {text} />
        </div>
        </>
    )
}
function Child({dataParentToChild}){
    return(
        <>
            <div>
                {dataParentToChild}
            </div>
        </>
    );
}
export default Parent;




















// export default function FirstDemo(){
//     const handleChange = (e) => {
//         var txt = e.target.value;
//         setText(txt);
//     }
    
//     const [text, setText] = useState("");
//     console.log(text)
//     return(
//         <>
//             <div>
//                 <input type="text" name="text1" id="text1" onChange={handleChange} />
//             </div>
//             <SecondDemo title={text} />
//             {/* <Demo title={text} /> */}
//         </>
//     )
// }