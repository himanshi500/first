import React from 'react'

export default function Jasmine(props) {
  return (
    <div>
      <div className="input-group">
  <span className="input-group-text">{props.title}</span>
  <textarea className="form-control" aria-label="With textarea"></textarea>
</div>
    </div>
  )
}
