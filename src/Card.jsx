import React as "react"
function Card(props){
  return <div className="term">
    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {props.emoji}
      </span>
      <span>{props.Name}</span>
    </dt>
    <dd>
      {props.meaning}
    </dd>
  </div>
}
export default card
