export const Loading = () => {
  const skeletonBar = {
    small: {
      backgroundColor: "#edede9",
      color: "#edede9",
      width: "150px",
      height: "auto",
      borderRadius: "4px"
    },
    default: {
      backgroundColor: "#edede9",
      color: "#edede9",
      width: "250px",
      height: "auto",
      borderRadius: "4px"
    },
    medium: {
      backgroundColor: "#edede9",
      color: "#edede9",
      width: "350px",
      height: "auto",
      borderRadius: "4px"
    }
  }
  
  return (
    <section>
       <h2 style={skeletonBar.small}>title</h2>
       <p style={skeletonBar.medium}>text</p>
       <p style={skeletonBar.medium}>text</p>
       <p style={skeletonBar.medium}>text</p>
    </section>
  )
}
