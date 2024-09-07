import { useState } from "react"
import styles from "./Contacts.module.css"

const contacts=[
    {id:1,name:"سینا",gmail:"sina.gh@gamil.com"},
    {id:2,name:"محمد",gmail:"mohamd.gh@gamil.com"},
    {id:3,name:"سهراب",gmail:"sohrab.gh@gamil.com"},
    {id:4,name:"علی",gmail:"ali.gh@gamil.com"},
    {id:5,name:"میلاد",gmail:"milad.gh@gamil.com"},
    {id:6,name:"کیوان",gmail:"keyvan.gh@gamil.com"},
    {id:7,name:"امیر",gmail:"amir.gh@gamil.com"},
]

function Contacts() {
  const[search,setSearch]=useState("")
  const[contact,setContact]=useState([])
  const [filteredContacts,setFilteredContacts]=useState(contacts);
  const[isShow,setIsShow]=useState(false);
  const[remove,setRemove]=useState(false);

  const deleteHandler=()=>{
    
    setRemove(true);
   

  }




  const showHandler=()=>setIsShow(true)

  const searchHandler=(event)=>{

    setSearch(event.target.value);
    
    const filteredItems= contacts.filter((contact)=>
      contact.gmail.toLowerCase().includes(search.toLowerCase()) || 
    contact.name.toLowerCase().includes(search.toLowerCase()) 
  );
  
   setFilteredContacts(filteredItems);
   
  }


  return (
    <div>
      <div className={styles.header}>
      <label>جسنجودرمخاطبین </label>
        <input onChange={searchHandler} type="text" name="input" value={search} />
        <button >completed</button>
        
        <button>add</button>


      </div>

        
        <ul className={styles.container}>
        {filteredContacts.map(contact => <li key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.gmail}</p>

          <button className={isShow && styles.hidden} onClick={showHandler}>More</button>
          {
            isShow?( <div className={styles.more}>
              <button onClick={deleteHandler} >حذف</button>
              {remove && <div> <p>Are you sure</p> <button>Yes</button> <button>No</button></div>}
              
              <button>ویرایش</button>
 
            </div>) : null

          }
         
         
        </li>)}

       
            
        </ul>



    </div>
  )
}

export default Contacts