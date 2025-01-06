import '../styles/Tutors.css'

function tutors(props) {
    return (
      <div className="tutor-list">

        {
            props.tutorsList.map((item,index)=>{

                return(
                    <div className='kartu-tutor' key={index}>
                        <img src={item.Image}/>
                        <p>{item.name}</p>
                    </div>

                )
            })
        }
                

        </div>
    )
  }
  
  export default tutors
  