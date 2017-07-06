import React from 'react';
import { Link } from 'react-router';
import { lessoncontainer } from './styles.css';


const SingleLessonView = (props, context) => (

  <div className={lessoncontainer}>
	  <div>
		   <h2>{props.title}</h2>
		   <p>Sequence: {props.sequence}</p>
		   <p>{props.objective}</p>
		   <p>{props.videoURL}</p>
		   <p>Published: {props.published}</p>
		   <p>Marked Complete: {props.markedComplete}</p>
		   <p>Archived: {props.archived}</p>
		   <Link
		   		className="btn btn-default"
		   		to={`/SingleCourseView/${props.course}`}>
		   		Back to Course
		   </Link>
	  </div>
  </div>
)

export default SingleLessonView;
