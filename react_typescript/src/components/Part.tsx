import { CoursePart } from "../types";

const Part = ({content}: {content: CoursePart}) => {
  switch (content.kind) {
    case "basic":
      return (
        <div>
          <div><b>{content.name} {content.exerciseCount}</b></div>
          <div><i>{content.description}</i></div>
        </div>
      )
      break;
    case "group":
      return (
        <div>
          <div><b>{content.name} {content.exerciseCount}</b></div>
          <div>project exercises {content.groupProjectCount}</div>
        </div>
      )
      break;
    case "background":
      return (
        <div>
          <div><b>{content.name} {content.exerciseCount}</b></div>
          <div><i>{content.description}</i></div>
          <div>{content.backgroundMaterial}</div>
        </div>
      )
      break;
    default:
      break;
  }
}

export default Part;  