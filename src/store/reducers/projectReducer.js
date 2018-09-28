const initState = {
  projects: [
    {id: 1, title: "title_1", content: 'blah blah blah'},
    {id: 2, title: "title_2", content: 'blah blah blah'},
    {id: 3, title: "title_3", content: 'blah blah blah'},
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create project', action.project);

  }
  return state
}

export default projectReducer;