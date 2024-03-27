import './skills.css'
import { FaCaretRight } from "react-icons/fa";

function Skills(){
  return(
    <div style={{padding:'40px',position:'relative',top:'80px'}}>
 <div style={{height:'500px',width:'500px',borderRadius:'10px',border:'2px solid blue' ,position:'relative',left:'550px',padding:'8px',marginRight:'50px',backgroundColor:'#D0D3D4 '}}>
                      <div style={{position:'relative',right:'40px',paddingTop:'50px'}}>
                       <h1 className='skills' style={{fontSize:'40px',textAlign:'center',color:'#2DB3E0',textDecorationColor:'blue'}} >Skills</h1>
                       <ul style={{color:'#1F259B  '}}>
                                <li style={{textAlign:'center'}}><FaCaretRight style={{position:'relative' ,left:'200px',top:'20px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;HTML </li>
                                <li style={{textAlign:'center'}}><FaCaretRight style={{position:'relative' ,left:'200px',top:'20px'}}/>&nbsp;CSS </li>
                                <li style={{textAlign:'center'}}><FaCaretRight style={{position:'relative' ,left:'200px',top:'20px'}}/>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Javascript </li>
                                <li style={{textAlign:'center'}}><FaCaretRight style={{position:'relative' ,left:'200px',top:'20px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React.Js </li>
                                <li style={{textAlign:'center'}}><FaCaretRight style={{position:'relative' ,left:'200px',top:'20px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Git  and  Github</li>
                                <li style={{textAlign:'center'}}><FaCaretRight style={{position:'relative' ,left:'200px',top:'20px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Basics of Cloud Computing</li>
                                <li style={{textAlign:'center'}}><FaCaretRight style={{position:'relative' ,left:'200px',top:'20px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Communication Skills</li>
                       </ul>
                       </div>
                    </div>


    </div>
  )
}
export default Skills