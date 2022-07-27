import React from "react";

export default function FilterReact(props) {
  return (
    <select onChange={props.handler} value={props.value} style={props.styles}>
      {props.options.map((opt) => {
        return <option value={opt.value}>{opt.name}</option>;
      })}
    </select>
  );
}
