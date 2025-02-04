function Content() {
  return(
    <>

    </>
  )
}

const sources = 
{
  heading:"",
  sources: [
    {text:'', url:''},
  ]
}

const template = {
  title: "",
  subtitle: "",
  author: "",
  date: new Date(""),
  editedDate: null,
  url:"",
  content: <Content />,
  sources: sources,

}

export { template };