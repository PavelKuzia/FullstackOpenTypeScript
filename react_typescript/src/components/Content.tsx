import Part from "./Part"
import {CoursePart} from "../types"


const Content = ({courseParts}: {courseParts: CoursePart[]}) => {
  return (
    <div>
      {courseParts.map(v => (
        <Part content={v} />
      ))}
    </div>
  )
}

export default Content;