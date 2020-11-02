import axios from 'axios';
import { GET_EMPLOYEES,
         EMPLOYEES_LOADING, 
         ADD_EMPLOYEE, 
         DELETE_EMPLOYEE,
         GET_EMPLOYEE, 
         SIGNUP_USER,
         LOGIN_USER
         } 
         from './types';

export const getEmployees = (page)=>dispatch =>{

   dispatch(setEmployeesLoading());
   axios
   .get(`http://localhost/practice/public/index.php/api/employees/${page}`)
   .then(res=>
    dispatch({
        type:GET_EMPLOYEES,
        payload:res.data
    })
    
    )


}

export const getEmployee = (id)=>dispatch =>{

    dispatch(setEmployeesLoading());
    axios
    .get(`http://localhost/practice/public/index.php/api/employee/${id}`)
    .then(res=>
     dispatch({
         type:GET_EMPLOYEE,
         payload:res.data
     })
     
     )
 
 
 }
 


export const addEmployee = (employee) => dispatch =>{

    axios
    .post('http://localhost/practice/public/index.php//api/employees/add',employee)
    .then(res=>
        dispatch({
          type:ADD_EMPLOYEE,
          payload:res.data
    }))

}

export const addUser = (user) => dispatch =>{

    axios
    .post('http://localhost/practice/public/index.php/api/signup',user)
    .then(res=>
        dispatch({
          type:SIGNUP_USER,
          payload:res.data
    }))

}

export const loginUser = (user) => dispatch =>{

    axios
    .post('http://localhost/practice/public/index.php/api/login',user)
    .then(res=>
        dispatch({
          type:LOGIN_USER,
          payload:res.data
    }))

}

// export const updateEmployee = (id,employee) => dispatch =>{
//     axios
//     .delete(`http://localhost/practice/public/index.php/api/employee/update/${id}`,employee)
//     dispatch({
//         type:UPDATE_EMPLOYEE,
//         payload:res.data
//     })
// }

export const deleteEmployee = (id) => dispatch =>{
    axios
    .delete(`http://localhost/practice/public/index.php/api/employee/delete/${id}`)
    dispatch({
        type:DELETE_EMPLOYEE,
        payload:id
    })
}


export const setEmployeesLoading = () =>  {
    return{
        type:EMPLOYEES_LOADING 
    }
}