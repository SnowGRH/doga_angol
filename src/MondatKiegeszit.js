export default function MondatKiegeszit(props){
 
return[
    <div className="kerdes">
    <span >{props.szo[0]}</span>
    <input type="text" id="valasz" name="valasz"></input>
    <span>{props.szo[1]}</span>
    <span>{props.helyes}</span>
  </div>
]
}