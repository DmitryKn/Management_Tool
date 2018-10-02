export const createProject = (project) => {
  return (dispatch, getState) => {
    //make async call
    dispatch({
      type: 'CREATE_PROJECT',
      project: project
    })
    
  }
}

//thunk returns function
//dispatch functions to reducer  return(dispatch) => { dispatch({object})}

//dispatch action to component
//import createProject from "////"
//import connect

/* 
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
...
  submit = (e) => {
    this.props.createProject(this.state)
  }
} */