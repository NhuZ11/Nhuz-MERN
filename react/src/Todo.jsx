import React from "react";
let todos = [
  {
    title: "html",
    status: true,
    user: "ram",
  },
  {
    title: "css",
    status: true,
    user: "ram",
  },
  {
    title: "js",
    status: false,
    user: "ram",
  },
  {
    title: "react",
    status: true
  }
];

//  export default function Todos(props) {
//     return (
//       <div className='todotask'>
//          <table>
//             <tr>
//                 <th>Task</th>
//                 <th>Status</th>
//             </tr>
//             <tr>
//                 <td> <p className='title'>{props.title}</p></td>
//                 <td><p className='status'>{props.status}</p></td>
//             </tr>
//          </table>

//       </div>
//     )
//   }


export default function Todo() {
  return (
    <div>
      <table className="todotask">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((el) => {
            return (
              <tr>
                <td>{el.title} {el.user? `(${el.user})`:"(-)"}</td>  {/*conditional rendering*/ }
                <td>{el.status ? "✔" : "❌"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
