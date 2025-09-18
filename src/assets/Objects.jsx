function Objects(){
    const users=[
        {id:1,name:'srivamsi',age:25},
        {id :2,name:'suresh',age:24},
        {id:3,name:'naidu',age:22},
        {id:4,name:'pramod',age:28}
    ];
    return (
        <div style={{border:"1px solid black" , textAlign:"left"}}>
            <ol>
            {users.map(user=>
                <li key={user.id} >
                    
                    {(user.id===2)
                        ?`${user.name}  is  ${user.age} years old .};`:""
                    }
                </li>
            )}
            </ol>
        </div>
    )
}
export default Objects;